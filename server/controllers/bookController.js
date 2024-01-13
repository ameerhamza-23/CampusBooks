//create book
const createBook = async (req, res) => { 
    try {
        const { name, author, price, description, image,uID } = req.body;
        const query = `INSERT INTO books (name, author, price, description, image, uID) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
        const values = [name, author, price, description, image, uID];
        const newBook = await pool.query(query, values);
        res.json(newBook.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
}

//delete book
const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const query = `DELETE FROM books WHERE id = $1 RETURNING *`;
        const deletedBook = await pool.query(query, [id]);
        res.json(deletedBook.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
}