const pool = require("../db");

const getAllUsers = async (req, res) => { 

    try {
        const allUsers = await pool.query('SELECT * FROM users');
        res.json(allUsers.rows);
    }
    catch(err) {
        console.log(err.message);
    }
}

module.exports = { getAllUsers };