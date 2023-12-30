const router = require("express").Router();
const pool = require("../db");
const { register, login } = require("../controllers/userController");

router.post("/register",register);
router.post("/login",login);

module.exports = router;
