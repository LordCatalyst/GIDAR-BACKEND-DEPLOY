const { Router } = require("express");
const CaseTypeController = require("./caseType.controller");
const caseTypeRouter = new Router();
const caseTypeController = new CaseTypeController();

caseTypeRouter.get(
    "/gestion_interna/tipo_caso/all",
    caseTypeController.getCaseTypes
);
caseTypeRouter.get(
    "/gestion_interna/tipo_caso/:id",
    caseTypeController.getCaseTypeById
);
caseTypeRouter.post(
    "/gestion_interna/tipo_caso/add",
    caseTypeController.addCaseType
);

module.exports = caseTypeRouter;
