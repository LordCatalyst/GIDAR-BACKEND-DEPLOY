const { PriorityLevelService } = require("./priorityLevel.service");
const { ErrorHandler } = require("../../../utils/error.handler");
const priorityLevelService = new PriorityLevelService();

class StatesController {
    async getPriorityLevels(req, res) {
        try {
            const data = await priorityLevelService.getPriorityLevels();
            return res.json(data);
        } catch (error) {
            ErrorHandler.handleHttp(req, error);
        }
    }

    async getPriorityLevelsById(req, res) {
        try {
            const { id } = req.params;
            const data = await priorityLevelService.getPriorityLevelById(id);
            return res.json(data);
        } catch (error) {
            ErrorHandler.handleHttp(res, error);
        }
    }

    async addPriorityLevel(req, res) {
        try {
            const { body } = req;

            const dataResponse =
                await priorityLevelService.addPriorityLevel(body);

            return res.json({ id_prioridad: dataResponse.id_prioridad });
        } catch (error) {
            ErrorHandler.handleHttp(res, error);
        }
    }
}

module.exports = StatesController;
