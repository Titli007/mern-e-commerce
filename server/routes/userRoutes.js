const express = require('express')
const {createUser, loginUser, getAllUser, getSingleUser} = require('../controllers/userControler')
const {auth} = require("../middleware/auth")

const userRoutes = express.Router()

userRoutes.post('/user/signup', createUser)

userRoutes.post('/user/login', loginUser)

userRoutes.get('/user/all',  getAllUser)

userRoutes.get('/user/me', auth, getSingleUser)

module.exports = userRoutes