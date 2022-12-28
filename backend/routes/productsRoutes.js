const express = require('express')
const checkName = require('../middlewares/checkName')
const Product = require('../models/Product')
const router = express.Router()

router.get("/test", (req, res) => {
    res.send('router product')
})

// get all products

router.get("/", async (req, res) => {
    //console.log(typeof req.query.category);
    const cat =  req.query.category || "";
    const name =  req.query.name || "";
    console.log(cat);
    try {
        const allProducts = await Product.find({ category: { $regex: cat },name:{ $regex: name,$options: "i" } })
        res.send({ products: allProducts })
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})

//add new product
router.post("/add", async (req, res) => {
    try {
        //req.body=={name:"xx",age...}
        console.log(req.body)
        const newProduct = new Product(req.body)
        await newProduct.save()
        res.send({ msg: "product added successfully", newProduct })
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
})


//update product

router.put("/update/:id", async (req, res) => {
    try {
        /*method 1
        let searchedProduct = await Product.findOne({ _id: req.params.id })
        console.log("1",searchedProduct instanceof Product);
        // nooooo searchedProduct = { ...searchedProduct, ...req.body }
        searchedProduct.name=req.body.name
        console.log("2",searchedProduct instanceof Product);
        await searchedProduct.save()*/
        const updatedProduct = await Product.updateOne({ _id: req.params.id }, { ...req.body })
        if (!updatedProduct.modifiedCount) {
            return res.status(400).send({ msg: "product already updated" })
        }
        res.send({ msg: "product successfuly updated" })
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})

//delete product
router.delete("/delete/:idDelete", async (req, res) => {
    try {
        const result = await Product.deleteOne({ _id: req.params.idDelete })
        if (result.deletedCount) {
            return res.send({ msg: "product deleted" })
        }
        return res.status(400).send({ msg: "product already deleted" })
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }


})


module.exports = router