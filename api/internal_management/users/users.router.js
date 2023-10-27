const { Router } = require("express");
const UsersController = require("./users.controller");
const usersRouter = new Router();
const usersController = new UsersController();

usersRouter.get("/gestion_interna/usuarios/all", usersController.getUsers);
usersRouter.get("/gestion_interna/usuarios/:id", usersController.getUserById);
usersRouter.post("/gestion_interna/usuarios/add", usersController.addUser);

module.exports = usersRouter;
