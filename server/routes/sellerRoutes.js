const express = require("express")
const {createSeller, getseller, getAllSeller, loginSeller, singleSeller} = require("../controllers/sellerControler")
const {auth} = require('../middleware/auth')

const sellerRoutes = express.Router()

sellerRoutes.post('/seller/create/:userId', createSeller)
sellerRoutes.post('/seller/login', loginSeller)
sellerRoutes.get('/seller/get/:sellerId', getseller)
sellerRoutes.get('/seller/all', getAllSeller)
sellerRoutes.get('/seller/me', auth, singleSeller)


module.exports = sellerRoutes