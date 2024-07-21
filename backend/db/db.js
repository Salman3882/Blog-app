const mongoose = require('mongoose')
require('dotenv').config()

const dbConnection = async ()=>{
try {
    await mongoose.connect(`${process.env.MONGO_URI}`).then(()=>{
        console.log("connected to the database")
    })
} catch (error) {
    console.log("Error connecting to the database:",error)
}
}
dbConnection()
 