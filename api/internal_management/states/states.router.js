const { Router } = require("express");
const StatesController = require("./states.controller");
const statesRouter = new Router();
const statesController = new StatesController();

statesRouter.get("/gestion_interna/estados/all", statesController.getStates);
statesRouter.get("/gestion_interna/estados/:id", statesController.getStateById);
statesRouter.post("/gestion_interna/estados/add", statesController.addState);

module.exports = statesRouter;
