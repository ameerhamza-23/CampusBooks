const pool = require("../db");

const getAllUsers = async (req, res) => { 

    try {
        const userRole = req.user.role;

        if(userRole === 'admin') {
            const allUsers = await pool.query('SELECT * FROM users');
            res.status(200).json({message: "Welcome to admin dashboard", users: allUsers});
        }
        else {
            res.status(400).json({error:"cannot access this route"})
        }
        
    }
    catch(err) {
        console.log(err.message);
    }
}

module.exports = { getAllUsers };