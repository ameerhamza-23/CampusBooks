const pool = require("../db");
const jwt = require('jsonwebtoken');

const refreshToken = async(req, res) => {

    const cookies = req.cookies;
    if(!cookies?.token) return res.sendStatus(401);
    const refreshToken = cookies.token;

    const query = `SELECT * FROM users WHERE refreshtoken = $1`;
    const checkUserExists = await pool.query(query,[refreshToken]);
    if (!checkUserExists.rows.length > 0 ) {
        return res.sendStatus(403);
    }   
    const user = checkUserExists.rows[0];

    jwt.verify(
        refreshToken,
        process.env.JWT_SECRET,
        (err, decoded) => {
            if(err || user.id !== decoded.userId){
                return res.sendStatus(403);
            } 
            const accessToken = jwt.sign(
                { userId: user.id, role:user.role },
                process.env.JWT_SECRET,
                { expiresIn: '15m' }
            )
            res.json({accessToken})
        }
    );
};

module.exports = { refreshToken };