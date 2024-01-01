const pool = require("../db");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {

    const {username, name, email, password} = req.body;
    console.log('body: ',req.body);
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = `INSERT INTO users (username, name, email, password) VALUES ($1, $2, $3, $4) RETURNING id, username, name, email`;
    const values = [username, name, email, hashedPassword];

    try {

        const checkUserExists = await pool.query('SELECT * FROM users WHERE username = $1 OR email = $2', [username, email]);

        if (checkUserExists.rows.length > 0) {
          return res.status(400).json({ error: 'Username or email already exists' });
        }

        const newUser = await pool.query(query, values);
        res.json(newUser.rows[0]);
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
    const retUser = {
        id: user.id,
        username: user.username,
        name: user.name,
        email: user.email
    }
    res.json(retUser);
}

module.exports = { register, login };