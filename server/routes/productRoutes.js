const express = require("express")
const {createProduct, updateProductPrice, deleteProduct, getProduct, getSingleProduct, getProductsOfSeller} = require("../controllers/productController")

const productRoutes = express.Router()

//for seller
productRoutes.post('/product/create/:sellerId', createProduct)
productRoutes.put('/product/update/:productId', updateProductPrice)
productRoutes.delete('/product/delete/:productId', deleteProduct)
productRoutes.get('/products/get/:sellerId', getProductsOfSeller)

//for customer

//all products
//category wise products
productRoutes.get('/product/get', getProduct)



//single product
productRoutes.get("/singleproduct/get/:productId", getSingleProduct )

module.exports = productRoutes
