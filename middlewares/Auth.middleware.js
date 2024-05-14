const {verifyAccessToken} = require("../utils/jwtUtils")

const AuthMiddleware = (req,res,next)=>{
    const token = req.header('Authorization')
    if (!token) return res.status(403).send({
        message:"Authentication required"
    })
    try {
        const decoded = verifyAccessToken(token)
        req.email = decoded.email
        next();
    } catch (error) {
        return res.status(401).send({ error: 'Invalid token' });
    }
}

module.exports = AuthMiddleware;