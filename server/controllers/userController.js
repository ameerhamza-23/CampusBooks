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
    const values = [username, name, email, hashedPassword, 'user'];

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
    res.json({token});

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

    const token = jwt.sign({ userId: user.id, role:user.role }, process.env.JWT_SECRET, { expiresIn: '30s' });

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
    });

    const retUser = {
        id: user.id,
        name: user.name,
        role: user.role
    }


    res.json({ token, retUser });
}

const logout = async(req, res) => {

    const cookies = req.cookies;
    if(!cookies?.token) {
        return res.sendStatus(204);
    }
    const refreshToken = cookies.token;

    const query = `SELECT * FROM users WHERE refreshtoken = $1`;
    const checkUserExists = await pool.query(query,[refreshToken]);
    if (!checkUserExists.rows.length > 0 ) {
        res.clearCookie('token', {httpOnly: true, naxAge: 24 * 60 * 60 * 1000});
        return res.sendStatus(204);
    }   
    const user = checkUserExists.rows[0];
    const query2 = `UPDATE users SET refreshtoken = NULL WHERE id = $1 AND refreshtoken = $2;`;

    await pool.query(query2, [user.id, user.refreshtoken]);

    res.clearCookie('token', {httpOnly: true, maxAge: 24 * 60 * 60 * 1000});
    res.sendStatus(204);

}

module.exports = { register, login, logout };