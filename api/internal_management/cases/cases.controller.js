const { ErrorHandler } = require("../../../utils/error.handler");
const { CasesService } = require("./cases.service");
const { responseWithCustomHeader } = require("../../../utils/custom.header");
const casesService = new CasesService();

class CasesController {
    async getCases(req, res) {
        try {
            const data = await casesService.getCases();
            return res.json(data);
        } catch (error) {
            console.log(error);
            ErrorHandler.handleHttp(req, error);
        }
    }

    async getCaseById(req, res) {
        try {
            const { id } = req.params;
            const data = await casesService.getCasesById(id);
            return res.json(data);
        } catch (error) {
            ErrorHandler.handleHttp(res, error);
        }
    }

    async getCaseByStatus(req, res) {
        try {
            const { status } = req.params;
            const data = await casesService.getCasesByState(status);
            return res.json(data);
        } catch (error) {
            ErrorHandler.handleHttp(res, error);
        }
    }

    async getCaseByResponsible(req, res) {
        try {
            const { responsible } = req.params;
            const data = await casesService.getCasesByResponsible(responsible);
            return res.json(data);
        } catch (error) {
            ErrorHandler.handleHttp(res, error);
        }
    }

    async getCaseByResponsibleAndStatus(req, res) {
        try {
            const { responsible, status } = req.params;
            const data = await casesService.getCasesByResponsibleAndStatus(
                responsible,
                status
            );
            return res.json(data);
        } catch (error) {
            ErrorHandler.handleHttp(res, error);
        }
    }

    async putCase(req, res) {
        try {
            const { id } = req.params;
            const { id_estado, id_responsable } = req.body;
            const dataResponse = await casesService.putCase(
                id,
                id_estado,
                id_responsable
            );
            responseWithCustomHeader(res, 200, dataResponse, "{}");
        } catch (error) {
            ErrorHandler.handleHttp(res, error);
        }
    }

    async addCase(req, res) {
        try {
            const { body } = req;

            const dataResponse = await casesService.addCase(body);

            return res.json({ id_caso: dataResponse.id_caso });
        } catch (error) {
            ErrorHandler.handleHttp(res, error);
        }
    }
}

module.exports = CasesController;
