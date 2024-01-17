const router = require("express").Router();
const {getAllUsers, getAllBooks, deleteUser} = require("../controllers/adminController");
const { deleteBook } = require("../controllers/adminController");
const verifyRole = require("../middleware/verifyRole");

//protected routes
router.get("/users",verifyRole('admin'),getAllUsers);
router.get("/books",verifyRole("admin"),getAllBooks);
router.delete("/books",verifyRole('admin'),deleteBook);
router.delete("/users",verifyRole('admin'),deleteUser);

module.exports = router;