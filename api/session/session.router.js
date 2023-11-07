const { Router } = require("express");
const { SessionController } = require("./session.controller");
const sessionRouter = Router();
const sessionController = new SessionController();

sessionRouter.post(
    "/gestion_interna/validar_inicio_sesion",
    sessionController.verifySessionAttempt
);

module.exports = sessionRouter;
