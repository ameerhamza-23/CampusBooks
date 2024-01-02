const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401);

    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized - Missing Token' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Unauthorized - Invalid Token' });
        }
        req.user = {
            id: decoded.userId,
            role: decoded.role
        }
        next();
    });
};

module.exports = verifyToken;
