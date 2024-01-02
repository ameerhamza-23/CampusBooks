const router = require("express").Router();
const {getAllUsers} = require("../controllers/adminController");
const verifyRole = require("../middleware/verifyRole");

//protected routes
router.get("/users",verifyRole('admin'),getAllUsers);

module.exports = router;