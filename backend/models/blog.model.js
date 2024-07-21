const { Timestamp } = require('bson')
const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    blogImage:{
        type:String,
        required:true
    }
},{Timestamps:true})


module.exports = mongoose.model("Blog",blogSchema)