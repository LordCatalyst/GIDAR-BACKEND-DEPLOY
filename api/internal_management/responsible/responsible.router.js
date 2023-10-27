const { Router } = require("express");

const ResponsibleController = require("./responsible.controller");
const responsibleController = new ResponsibleController();
const responsibleRouter = new Router();

responsibleRouter.get(
    "/gestion_interna/responsables/all",
    responsibleController.getResponsibles
);
responsibleRouter.get(
    "/gestion_interna/responsables/:id",
    responsibleController.getResponsibleById
);
responsibleRouter.post(
    "/gestion_interna/responsables/add",
    responsibleController.addResponsible
);
module.exports = responsibleRouter;
