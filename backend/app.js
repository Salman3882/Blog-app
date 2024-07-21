const express = require('express')
require('dotenv').config()
const cors = require('cors')
const app = express()
const userApi = require('./routes/user.routes')
const blogApi = require('./routes/blog.route')
app.use(express.json())
app.use(cors())

const PORT = 3000
const connectDb = require('./db/db')
app.use('/api/v1',userApi)
app.use('/api/v2',blogApi)
app.listen(PORT,()=>{
    console.log(`Server is listening at ${PORT}`)
})