const { ErrorHandler } = require("../../../utils/error.handler");
const { ResponsibleService } = require("./responsible.service");
const responsibleService = new ResponsibleService();

class ResponsibleController {
    async getResponsibles(req, res) {
        try {
            const data = await responsibleService.getResponsibles();
            return res.json(data);
        } catch (error) {
            ErrorHandler.handleHttp(req, error);
        }
    }

    async getResponsibleById(req, res) {
        try {
            const { id } = req.params;
            const data = await responsibleService.getResponsibleById(id);
            return res.json(data);
        } catch (error) {
            ErrorHandler.handleHttp(res, error);
        }
    }

    async addResponsible(req, res) {
        try {
            const { body } = req;

            const dataResponse = await responsibleService.addResponsible(body);

            return res.json({ id_responsable: dataResponse.id_responsable });
        } catch (error) {
            ErrorHandler.handleHttp(res, error);
        }
    }
}

module.exports = ResponsibleController;
