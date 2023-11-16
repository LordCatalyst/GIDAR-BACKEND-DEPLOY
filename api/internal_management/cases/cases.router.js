const { Router } = require("express");
const CasesController = require("./cases.controller");

const casesRouter = new Router();
const casesController = new CasesController();

casesRouter.get("/gestion_interna/casos/all", casesController.getCases);
casesRouter.get("/gestion_interna/casos/:id", casesController.getCaseById);
casesRouter.get(
    "/gestion_interna/casos/responsable/:responsible",
    casesController.getCaseByResponsible
);
casesRouter.get(
    "/gestion_interna/casos/dependencia/:dependency",
    casesController.getCaseByDependency
);
casesRouter.get(
    "/gestion_interna/casos/dependencia/:dependency/:status",
    casesController.getCaseByDependencyAndStatus
);
casesRouter.get(
    "/gestion_interna/casos/responsable/:responsible/:status",
    casesController.getCaseByDependencyAndStatus
);
casesRouter.get(
    "/gestion_interna/casos/estado/:status",
    casesController.getCaseByStatus
);
casesRouter.put("/gestion_interna/casos/update/:id", casesController.putCase);
casesRouter.post("/gestion_interna/casos/add", casesController.addCase);

module.exports = casesRouter;
