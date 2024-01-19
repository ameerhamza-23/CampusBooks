const pool = require("../db");

const getAllUsers = async (req, res) => {

  try {
    const userRole = req.user.role;

    if (userRole === 'admin') {
      const allUsers = await pool.query('SELECT * FROM users');
      res.status(200).json(allUsers.rows);
    }
    else {
      res.status(400).json({ error: "cannot access this route" })
    }

  }
  catch (err) {
    console.log(err.message);
  }
}

const getAllBooks = async (req, res) => {
  try {

    const userRole = req.user.role;

    if (userRole === 'admin') {
      const allBooks = await pool.query('SELECT * FROM book_details');
      res.status(200).json(allBooks.rows);
    }
    else {
      res.status(400).json({ error: "cannot access this route" })
    }

  }
  catch (err) {
    console.log(err.message);
  }
}

const deleteBook = async (req, res) => {

  try {

    const userRole = req.user.role
    if (userRole === 'admin') {
      const { bID } = req.query
      const response = await pool.query("DELETE FROM book_details WHERE bid = $1 RETURNING *", [bID])
      return res.status(200).json({ message: "book deleted successfully" })
    }
    else {
      return res.status(400).json({ error: "cannot access this route" })
    }
  }
  catch (error) {
    console.log(error)
    return res.status(500).json({ error: "internal server error" })
  }

};

const deleteUser = async (req, res) => {
  try {
    const userRole = req.user.role;
    if (userRole === 'admin') {
      const { uID } = req.query
      const query = `DELETE FROM users WHERE id = $1 RETURNING *`;
      const deletedUser = await pool.query(query, [uID]);
      return res.json({ message: "User deleted successfully" });
    }
    else {
      res.status(400).json({ error: "cannot access this route" })
    }
  }
  catch (err) {
    console.log(err)
    return res.status(500).json({ error: "Internal Server Error" })
  }
}

module.exports = { getAllUsers, getAllBooks, deleteBook, deleteUser };
