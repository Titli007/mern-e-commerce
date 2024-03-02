const express = require('express')
const {createUser, loginUser, getAllUser} = require('../controllers/userControler')

const userRoutes = express.Router()

userRoutes.post('/user/signin', createUser)

userRoutes.post('/user/login', loginUser)

userRoutes.get('/user/all', getAllUser)

module.exports = userRoutes