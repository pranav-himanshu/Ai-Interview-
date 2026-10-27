const { Router } = require('express');
const authController = require('../controllers/auth.controller')
const authRoutes = Router();
const authMiddleware = require('../middlewares/auth.middleware')


// register api
authRoutes.post('/register',authController.registerUserController)

// login api
authRoutes.post('/login', authController.loginUserController)

// logout api
authRoutes.get('/logout', authController.logoutUserController)


// data of the user which the user requested
// get api 
authRoutes.get('/get-me', authMiddleware.authUser, authController.getMeController)
module.exports = authRoutes;
