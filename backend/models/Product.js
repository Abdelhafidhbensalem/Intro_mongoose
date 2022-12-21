const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    category: { type: String, required: true, enum: ["tablette", "telephone", "others"] },
    createdOn: { type: Date, default: new Date },
    qte: Number,
    //imageSrc: { type: String }, à faire
    //user: { type: mongoose.Schema.Types.ObjectId } à faire
})


module.exports = Product = mongoose.model('product', productSchema)
