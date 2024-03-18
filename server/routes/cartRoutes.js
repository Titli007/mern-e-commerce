const express = require("express")
const {createCart, deleteCart, getCart} = require("../controllers/cartController")

const cartRoutes = express.Router()

cartRoutes.put('/cart/put/:userId', createCart)

cartRoutes.put('/cart/delete/:userId', deleteCart)

cartRoutes.get('/cart/get/:userId', getCart)



module.exports = cartRoutes