const mongoose  = require('mongoose')


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    blogs:[
        {
            type:mongoose.Schema.ObjectId,
            ref:"Blog"
        }
    ]
})


module.exports = new mongoose.model("User",userSchema)