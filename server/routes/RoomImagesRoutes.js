const express = require("express")
const {createProduct, updateProductPrice, deleteProduct, getProduct, getSingleProduct} = require("../controllers/productController")

const productRoutes = express.Router()

productRoutes.get('/room/inspiration', createProduct)