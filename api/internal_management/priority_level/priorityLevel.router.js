const { Router } = require("express");
const PriorityLevelController = require("./priorityLevel.controller");
const priorityLevelRouter = new Router();
const priorityLevelController = new PriorityLevelController();

priorityLevelRouter.get(
    "/gestion_interna/grado_prioridad/all",
    priorityLevelController.getPriorityLevels
);
priorityLevelRouter.get(
    "/gestion_interna/grado_prioridad/:id",
    priorityLevelController.getPriorityLevelsById
);
priorityLevelRouter.post(
    "/gestion_interna/grado_prioridad/add",
    priorityLevelController.addPriorityLevel
);

module.exports = priorityLevelRouter;
