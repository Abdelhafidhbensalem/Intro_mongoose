const express = require('express')
const connectDB=require('./config/connectDB')
const User=require("./models/User")
const app = express()
require("dotenv").config()

//console.log(process.env);

connectDB()
//console.log(process.env)
const createUser=async (name,age,email)=>{
    try {
        const newUser=new User({name,age,email})
//console.log(newUser);

await newUser.save()

    } catch (error) {
        console.log(error)
    }

}

createUser()
//routes
app.use("/api/user",require("./routes/userRoutes"))
app.use('/api/product',require("./routes/productsRoutes"))
const port = 5000

app.listen(port, (err) =>err?console.log(err): console.log(`Example app listening on port ${port}!`))