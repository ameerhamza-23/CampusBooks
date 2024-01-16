const verifyRole = (allowedRole) => {
    return (req, res, next) => {

        if(!req?.user.role) return res.sendStatus(401);
        if(allowedRole !== req.user.role) return res.sendStatus(401);
        next();
    }
}

module.exports = verifyRole;