const express = require("express")
const {createSeller, getseller, getAllSeller} = require("../controllers/sellerControler")

const sellerRoutes = express.Router()

sellerRoutes.post('/seller/create/:userId', createSeller)
sellerRoutes.get('/seller/get/:sellerId', getseller)
sellerRoutes.get('/seller/all', getAllSeller)


module.exports = sellerRoutes