const router = require("express").Router();
const {getAllUsers} = require("../controllers/adminController");
const verifyToken = require("../middleware/verifyToken");

router.get("/users",verifyToken,getAllUsers);

module.exports = router;