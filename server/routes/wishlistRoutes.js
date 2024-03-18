const express = require('express')
const {createWishlist, getWishlist, deleteWishlist} = require('../controllers/wishlistController')

const wishlistRoutes = express.Router()

wishlistRoutes.post('/wishlist/post/:userId', createWishlist)

wishlistRoutes.get('/wishlist/get/:userId', getWishlist)

wishlistRoutes.put('/wishlist/delete/:userId', deleteWishlist)

// wishlistRoutes.get('/wishlist/get/:userId', getAllwishList)

module.exports = wishlistRoutes