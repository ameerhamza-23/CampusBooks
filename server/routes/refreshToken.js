const router = require("express").Router();
const pool = require("../db");
const { refreshToken } = require("../controllers/refreshTokenController");

router.get("/",refreshToken);

module.exports = router;
