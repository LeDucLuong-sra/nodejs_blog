const express= require('express');
const userRouter= express.Router();

const userController =  require('../app/controllers/UserController');

userRouter.post('/register',userController.createUser);
userRouter.post('/login',userController.login);
userRouter.get('/register',userController.getRegister);
userRouter.get('/login',userController.getLogin);
userRouter.get('/logout',userController.logout);
userRouter.get('/refresh_token',userController.refreshToken);

module.exports= userRouter;