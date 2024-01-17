const pool = require("../db");

const getAllUsers = async (req, res) => { 

    try {
        const userRole = req.user.role;

        if(userRole === 'admin') {
            const allUsers = await pool.query('SELECT * FROM users');
            res.status(200).json(allUsers.rows);
        }
        else {
            res.status(400).json({error:"cannot access this route"})
        }
        
    }
    catch(err) {
        console.log(err.message);
    }
}

const getAllBooks = async (req,res) => {
    try {

        const userRole = req.user.role;

        if(userRole === 'admin') {
            const allBooks = await pool.query('SELECT * FROM book_details');
            res.status(200).json(allBooks.rows);
        }
        else {
            res.status(400).json({error:"cannot access this route"})
        }

    }
    catch(err) {
        console.log(err.message);
    }
}

const deleteBook = async (req, res) => {
    try {
        console.log("in delete boko")
        const userRole = req.user.role;
        if(userRole === 'admin') {
            const { bID } = req.query;
            const query = `DELETE FROM book_details WHERE bID = $1 RETURNING *`;
            const deletedBook = await pool.query(query, [bID]);
            return res.json({ message: "Book deleted successfully" });
        }
        else {
            res.status(400).json({error:"cannot access this route"})
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const deleteUser = async(req,res) => {
    try {
        const userRole = req.user.role;
        if(userRole === 'admin') {
            const {uID} = req.query
            const query = `DELETE FROM users WHERE id = $1 RETURNING *`;
            const deletedUser = await pool.query(query, [uID]);
            return res.json({ message: "User deleted successfully" });
        }
        else {
            res.status(400).json({error:"cannot access this route"})
        }
    }
    catch(err) {
        console.log(err)
        return res.status(500).json({error:"Internal Server Error"})
    }
}

module.exports = { getAllUsers, getAllBooks, deleteBook, deleteUser };