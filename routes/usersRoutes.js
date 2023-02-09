import express from 'express'
import userController from '../controllers/userController.js'

const userRoute = express.Router()

userRoute.get('/', userController.getAllUsers)
userRoute.post('/', userController.createNewUser)
userRoute.get('/:id', userController.getUserById)
userRoute.delete('/:id', userController.deleteUserById)

export default userRoute;