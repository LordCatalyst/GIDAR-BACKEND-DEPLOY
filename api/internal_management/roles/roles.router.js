const { Router } = require("express");
const RolesController = require("./roles.controller");
const rolesRouter = new Router();
const rolesController = new RolesController();

rolesRouter.get("/gestion_interna/roles/all", rolesController.getRoles);
rolesRouter.get("/gestion_interna/roles/:id", rolesController.getRoleById);
rolesRouter.post("/gestion_interna/roles/add", rolesController.addRole);

module.exports = rolesRouter;
