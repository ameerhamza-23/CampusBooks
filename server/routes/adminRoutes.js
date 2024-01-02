const router = require("express").Router();
const {getAllUsers} = require("../controllers/adminController");
const verifyToken = require("../middleware/verifyToken");

//protected routes
router.get("/users",verifyToken,getAllUsers);

module.exports = router;