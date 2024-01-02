const router = require("express").Router();
const pool = require("../db");
const { register, login } = require("../controllers/userController");

//public routes
router.post("/register",register);
router.post("/login",login);

//protected routes

module.exports = router;
