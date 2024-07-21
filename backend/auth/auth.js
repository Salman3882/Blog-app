const jwt = require('jsonwebtoken')
require('dotenv').config()

const authentication = (req,res,next)=>{
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]
    if(!token){
        // sattus:401=>unauthorized
        res.status(401).json({message:"User is not authenticated, token required"})

    }
    jwt.verify(token,process.env.SECRET_KEY,(err,user)=>{
        if(err){
            res.status(403).json({message:"Token is not valid"})
        }
        req.user = user
        next()
    })
}

module.exports = {authentication}