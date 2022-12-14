const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{type:String,required:true,uppercase:true,trim:true},
    age:Number,
    email:String,
})


module.exports= User=mongoose.model("user", userSchema)
