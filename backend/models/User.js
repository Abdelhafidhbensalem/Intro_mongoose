const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, uppercase: true, trim: true },
    age: {type:Number,min:0,max:100},
    email: String,
})

module.exports = User = mongoose.model("user", userSchema)
