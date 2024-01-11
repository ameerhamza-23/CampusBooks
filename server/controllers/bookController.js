//create book controller
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