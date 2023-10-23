var express = require('express');
var UserRouter = express.Router();
var UserController = require('../controller/users.controllers');

UserRouter.post("/addUser", UserController.addUser);
//UserRouter.post("/login", UserController.login);
//UserRouter.post('/changepassword', UserController.changepassword);
//UserRouter.post('/forgotpassword', UserController.forgotpassword);
//UserRouter.get("/Users", UserController.getAllUsers);
//UserRouter.put("/user/:id", UserController.updateUsers);
//UserRouter.delete("/user/:id", UserController.deleteUsers);

module.exports = UserRouter;