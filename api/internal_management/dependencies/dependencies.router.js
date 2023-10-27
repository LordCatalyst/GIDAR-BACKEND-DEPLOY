const { Router } = require("express");
const DependenciesController = require("./dependencies.controller");
const dependenciesRouter = new Router();
const dependenciesController = new DependenciesController();

dependenciesRouter.get(
    "/gestion_interna/dependencia/all",
    dependenciesController.getDependencies
);
dependenciesRouter.get(
    "/gestion_interna/dependencia/:id",
    dependenciesController.getDependencyById
);
dependenciesRouter.post(
    "/gestion_interna/dependencia/add",
    dependenciesController.addDependency
);

module.exports = dependenciesRouter;
