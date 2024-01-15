const router = require("express").Router();
const pool = require("../db");
const { createBook, deleteBook } = require("../controllers/bookController");

router.post("/create",createBook);
router.delete("/delete",deleteBook);

module.exports = router;
