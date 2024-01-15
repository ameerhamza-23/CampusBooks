const router = require("express").Router();
const { createBook, deleteBook, addToWishlist, removeFromWishlist, getWishlist } = require("../controllers/bookController");

router.post("/create", createBook);
router.delete("/delete/:id", deleteBook); 

router.post("/save", addToWishlist); 
router.delete("/remove", removeFromWishlist); 
router.get("/wishlist", getWishlist);

module.exports = router;
