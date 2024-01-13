//create book
const createBook = async (req, res) => { 
    try {
        const { name, author, price, condition, uID } = req.body;
        const query = `INSERT INTO book_details (name, author, price, condition, uID) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
        const values = [name, author, price, condition, uID];
        const newBook = await pool.query(query, values);
        console.log("new book inserted : ",newBook.rows[0]);
        return res.json({message: "Book created successfully"});
    } catch (err) {
        console.log(err.message);
    }
}   

//delete book
const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const query = `DELETE FROM books WHERE bID = $1 RETURNING *`;
        const deletedBook = await pool.query(query, [id]);
        return res.json({message: "Book deleted successfully"});
    } catch (err) {
        console.log(err.message);
    }
}

module.exports = { createBook, deleteBook };