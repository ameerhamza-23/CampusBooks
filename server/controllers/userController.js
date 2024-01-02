const pool = require("../db");
const jwt = require('jsonwebtoken');
const cookie = require('cookie');
const bcrypt = require("bcryptjs");

const register = async (req, res) => {

    const { username, name, email, password} = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const query = `
        INSERT INTO users (username, name, email, password, role)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING id, username, name, email, role
    `;
    const values = [username, name, email, hashedPassword, 'admin'];

    try {

        const checkUserExists = await pool.query('SELECT * FROM users WHERE username = $1 OR email = $2', [username, email]);

        if (checkUserExists.rows.length > 0) {
          return res.status(400).json({ error: 'Username or email already exists' });
        }

        const newUser = await pool.query(query, values);
        const user = newUser.rows[0];

        const token = jwt.sign({ userId: user.id, role:user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Set the token in an HTTP-only cookie
    res.cookie('token', token, {
        httpOnly: true,
        maxAge: 3600000, // Expires in 1 hour (milliseconds)
        sameSite: 'none',
        secure:true,
    });

    console.log("token: ",token);

    const retUser = {
        id: user.id,
        username: user.username,
        name: user.name,
        email: user.email
    }
    res.json(retUser);

    }
    catch(err) {
        console.log(err.message);
    }

}

const login = async (req, res) => {

    const {username, password} = req.body;
    const query = `SELECT * FROM users WHERE username = $1`;
    const checkUserExists = await pool.query(query,[username]);
    if (!checkUserExists.rows.length > 0 ) {
        return res.status(400).json({ error: 'Username or password is incorrect' });
    }   
    const user = checkUserExists.rows[0];
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        return res.status(400).json({ error: 'Username or password is incorrect' });
    }

    const token = jwt.sign({ userId: user.id, role:user.role }, process.env.JWT_SECRET, { expiresIn: '900s' });

    const refreshToken = jwt.sign(
        { userId: user.id, role:user.role }, process.env.JWT_SECRET, { expiresIn: '1d' }
    )

    const query2 = `UPDATE users SET refreshToken = $1 WHERE id = $2`
    const values2 = [refreshToken, user.id];

    await pool.query(query2,values2);

    // Set the token in an HTTP-only cookie
    res.cookie('token', refreshToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000, // Expires in 1 hour (milliseconds)
        sameSite: 'none',
        secure:true,
    });

    console.log("token: ",token);

    res.json({ token });
}

module.exports = { register, login };