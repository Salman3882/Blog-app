const cloudinary = require('cloudinary').v2
require('dotenv').config()
const fs = require('fs')
// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key:  process.env.CLOUDINARY_API_KEY, 
    api_secret:  process.env.CLOUDINARY_API_SECRET // Click 'View Credentials' below to copy your API secret
})
const uploadImage = async (imagePath)=>{
try {
    if (!imagePath) return null
       const response = await  cloudinary.uploader.upload(imagePath,{
            resource_type:"auto"       
        })
        console.log(imagePath)
        console.log("File has been uploaded on cloudinary",response.url)
        return response
    } catch (error) {
    fs.unlinkSync(imagePath) // remove the locally saved image
    return  null    
}
}   

module.exports = {uploadImage}