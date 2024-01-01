const router = require("express").Router();
const {getAllUsers} = require("../controllers/adminController");

router.get("/users",getAllUsers);

module.exports = router;