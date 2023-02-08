import express from 'express'
import userController from '../controllers/userController.js'

const userRoute = express.Router()

userRoute.get('/', userController.getAllUsers)
userRoute.get('/:id', userController.getUserById)

export default userRoute;