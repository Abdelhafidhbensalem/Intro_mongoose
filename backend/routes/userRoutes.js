const express = require('express')
const { getAll } = require('../controllers/userControllers')
const checkName = require('../middlewares/checkName')
const User = require('../models/User')

const router = express.Router()

router.get("/test", (req, res) => {
    res.send('router user')
})

// user ==> request ==> all users
router.get("/", getAll)

//create new User  ==> inscrit

router.post("/add",checkName, async (req, res) => {
    try {
        //req.body=={name:"xx",age...}
        console.log(req.body)
        const newUser = new User(req.body)
        await newUser.save()
        res.send({ msg: "user added successfully", newUser })
    } catch (error) {
        console.log(error);
        res.end()
    }
})

// delete user


router.delete("/:idDelete", async (req, res) => {
    try {
        const response = await User.deleteOne({ _id: req.params.idDelete })
        res.send({ msg: "user deleted successfully", response })

    } catch (error) {
        console.log(error);
    }
})

module.exports = router