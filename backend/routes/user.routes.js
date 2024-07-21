const router = require('express').Router()
const User = require('../models/user.model.js')
const bcrypt = require('bcrypt')
require('dotenv').config()
const jwt = require('jsonwebtoken')
// Sign in a user

router.post('/sign-in', async (req, res) => {
    const { username, email, password } = req.body

    //check if the user exists
    const userExists = await User.findOne({ username })
    const emailExists = await User.findOne({ email })
    if (userExists) {
        return res.status(400).json({ message: "Username already exists" })
    }

    if (emailExists) {
        return res.status(400).json({ message: "Email already exists" })
    }

    //hashing the password
    const hashPassword = await bcrypt.hash(password, 10)
    const newUser = User({
        username: username,
        email: email,
        password: hashPassword
    })

    //save the user
    await newUser.save()
    return res.status(200).json({ message: "User signed in Successfully" })
})

//log-in user
router.post('/log-in',async(req,res)=>{
try {
        const {username,password} = req.body
        const existingUser = await User.findOne({username})
        if (!existingUser){
            // status:404=> not found
            return res.status(404).json({message:"Invalid credentials"}) 
           }
           bcrypt.compare(password,existingUser.password,(err,data)=>{
            if(data){
                const authClaims = [{name:username},{jti:jwt.sign({},process.env.SECRET_KEY)}];
                const token = jwt.sign({authClaims},process.env.SECRET_KEY,{expiresIn:"2d"});
                // const token = jwt.sign({username},"secrekeyy",{expiresIn:"2d"})
                res.status(200).json({id:existingUser._id, token:token})
            }
            else{
                return  res.status(404).json({ message: "Invalid Credentials" })
            }
           })
} catch (error) {
    console.log(error)
    res.status(404).json({message:"Something went wrong while logging the user"})
}
})
//delete account

router.delete('/delete-account/:id',async(req,res)=>{
    try {
        const id = req.params.id
        await User.findByIdAndDelete(id)
        return res.status(200).json({message:"User deleted successfully"})
    } catch (error) {
        console.log(error)
        res.status(404).json({message:"User not found"})
    } 
    
})
module.exports = router