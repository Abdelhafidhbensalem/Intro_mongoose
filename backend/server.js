const express = require('express')
const cors=require('cors')
const connectDB = require('./config/connectDB')
const User = require("./models/User")
const app = express()

require("dotenv").config()

app.use(cors())
app.use(express.json())
//console.log(process.env);

connectDB()
//console.log(process.env)
/*

// create new user
const createNewUser = async () => {
    try {
        const user2 = new User({ name:"Mohamed",age: 20 })
        //console.log(user2);
        //const user3={name:"ali",age:"45"}
        await user2.save()
        console.log("user added successfully");
    } catch (error) {
        console.log(error)
    }
}

//createNewUser()

// get all users 

const findUsers=async()=>{
    try {
        const allUsers =await User.find({})
        console.log(allUsers)
    } catch (error) {
        console.log(error);
    }
}

//findUsers()

//findbyId
const findbyId=async(id)=>{
    try {
        const user=await User.findById(id)
    console.log(user)
    } catch (error) {
        console.log(error);
    }
}
const findOne=async(idS)=>{
    try {
        const user=await User.findOne({_id:idS})
    console.log(user)
    } catch (error) {
        console.log(error);
    }
}
// delete oneUser by Id


const deletedUser=async(idDelete)=>{
try {
    const res=await User.findOneAndDelete({_id:idDelete})
    console.log(res)
} catch (error) {
    console.log(error);
}
}
deletedUser("6398558d94ae74510613383e")
//update user id 
//findbyId("6398430852529de1e9c47d68")
//findOne("6398430852529de1e9c47d68")
*/
//routes
app.use("/api/user", require("./routes/userRoutes"))
app.use('/api/product', require("./routes/productsRoutes"))
const port = 5000

app.listen(port, (err) => err ? console.log(err) : console.log(`Example app listening on port ${port}!`))