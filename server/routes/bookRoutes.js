const router = require("express").Router();
const { createBook, deleteBook, addToWishlist, removeFromWishlist, getWishlist, getAllBooks, getBook } = require("../controllers/bookController");

router.get("/", getAllBooks);
router.post("/create", createBook);
router.delete("/delete/:id", deleteBook);
router.get("/:id", getBook);

router.post("/save", addToWishlist);
router.delete("/remove", removeFromWishlist);
router.get("/wishlist", getWishlist);

module.exports = router;
