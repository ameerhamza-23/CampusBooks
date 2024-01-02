const verifyRole = (allowedRole) => {
    return (req, res, next) => {

        if(!req?.user.role) return res.sendStatus(401);
        console.log("curr user has the role of : ",req.user.role);
        if(allowedRole !== req.user.role) return res.sendStatus(401);
        next();
    }
}

module.exports = verifyRole;