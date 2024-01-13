const router = require("express").Router();
const pool = require("../db");
const { createBook, deleteBook } = require("../controllers/bookController");

//public routes
router.post("/create",createBook);
router.delete("/delete",deleteBook);

//protected routes

module.exports = router;
