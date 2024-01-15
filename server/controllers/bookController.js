const pool = require("../db");

// create book
const createBook = async (req, res) => {
    try {
        const { name, author, price, condition, uID, edition, semester, subject } = req.body;
        const query = `INSERT INTO book_details (name, author, price, condition, uID, edition, semester, subject) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`;
        const values = [name, author, price, condition, uID, edition, semester, subject];
        const newBook = await pool.query(query, values);
        return res.json({ message: "Book created successfully" });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// delete book
const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const query = `DELETE FROM books WHERE bID = $1 RETURNING *`;
        const deletedBook = await pool.query(query, [id]);
        return res.json({ message: "Book deleted successfully" });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// add to wishlist
const addToWishlist = async (req, res) => {
    try {
        const { bID, uID } = req.body;
        const query = `INSERT INTO wishlist (bID, uID) VALUES ($1, $2) RETURNING *`;
        const values = [bID, uID];
        const result = await pool.query(query, values);
        return res.json({ message: "Added to wishlist successfully" });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// remove from wishlist
const removeFromWishlist = async (req, res) => {
    try {
        const { bID, uID } = req.body;
        const query = `DELETE FROM wishlist WHERE bID = $1 AND uID = $2 RETURNING *`;
        const values = [bID, uID];
        const result = await pool.query(query, values);
        return res.json({ message: "Removed from wishlist successfully" });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// get wishlist
const getWishlist = async (req, res) => {
    try {
        const { uID } = req.body;
        const query = `
            SELECT w.*, bd.name AS book_name, bd.author, bd.price, bd.condition, bd.edition, bd.semester, bd.subject
            FROM wishlist w
            JOIN book_details bd ON w.bID = bd.bid
            WHERE w.uID = $1
        `;
        const values = [uID];
        const wishlistWithDetails = await pool.query(query, values);
        return res.json(wishlistWithDetails.rows);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


module.exports = { createBook, deleteBook, addToWishlist, removeFromWishlist, getWishlist };
