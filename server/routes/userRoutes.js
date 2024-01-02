const router = require("express").Router();
const pool = require("../db");
const { register, login, logout } = require("../controllers/userController");

//public routes
router.post("/register",register);
router.post("/login",login);
router.get('/logout', logout);

//protected routes

module.exports = router;
