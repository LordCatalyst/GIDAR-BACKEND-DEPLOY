const { CaseTypeService } = require("./caseType.service");
const { ErrorHandler } = require("../../../utils/error.handler");
const caseTypeService = new CaseTypeService();

class CaseTypeController {
    async getCaseTypes(req, res) {
        try {
            const data = await caseTypeService.getCaseTypes();
            return res.json(data);
        } catch (error) {
            ErrorHandler.handleHttp(req, error);
        }
    }

    async getCaseTypeById(req, res) {
        try {
            const { id } = req.params;
            const data = await caseTypeService.getCaseType(id);
            return res.json(data);
        } catch (error) {
            ErrorHandler.handleHttp(res, error);
        }
    }

    async addCaseType(req, res) {
        try {
            const { body } = req;

            const dataResponse = await caseTypeService.addCaseType(body);

            return res.json({ id_tipo_Caso: dataResponse.id_tipo_caso });
        } catch (error) {
            ErrorHandler.handleHttp(res, error);
        }
    }
}

module.exports = CaseTypeController;
