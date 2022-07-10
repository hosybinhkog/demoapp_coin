const express = require('express');
const userRouter = express.Router();

const userController = require('../controllers/user.controller');
const { isAuthenticated, authorizeRoles } = require('../middleware/auth');

userRouter.get('/me', isAuthenticated, authorizeRoles('user'), userController.me);
userRouter.post('/register', userController.register);
userRouter.post('/login', userController.login);
userRouter.get('/logout', userController.logout);

module.exports = userRouter;
