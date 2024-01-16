const router = require("express").Router();
const {getAllUsers, getAllBooks} = require("../controllers/adminController");
const verifyRole = require("../middleware/verifyRole");

//protected routes
router.get("/users",verifyRole('admin'),getAllUsers);
router.get("/books",verifyRole("admin"),getAllBooks);

module.exports = router;