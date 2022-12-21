const express = require('express')
const checkName = require('../middlewares/checkName')
const Product = require('../models/Product')
const router = express.Router()

router.get("/test", (req, res) => {
    res.send('router product')
})

// get all products

router.get("/", async (req, res) => {

    try {
        const allProducts = await Product.find()
        res.send({ products: allProducts })
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
})


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
        if(!updatedProduct.modifiedCount){
            return res.status(400).send({msg:"product already updated"})
        }
        res.send({ msg:"product successfuly updated" })
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
})


module.exports = router