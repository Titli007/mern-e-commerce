const express = require("express")
const {createCart, updateCart, getCart} = require("../controllers/cartController")

const cartRoutes = express.Router()

cartRoutes.put('/cart/put/:userId', createCart)

cartRoutes.get('/cart/get/:userId', getCart)



module.exports = cartRoutes