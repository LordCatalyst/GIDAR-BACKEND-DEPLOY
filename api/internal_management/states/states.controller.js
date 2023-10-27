const { StatesService } = require("./states.service");
const { ErrorHandler } = require("../../../utils/error.handler");
const statesService = new StatesService();

class StatesController {
    async getStates(req, res) {
        try {
            const data = await statesService.getStates();
            return res.json(data);
        } catch (error) {
            ErrorHandler.handleHttp(req, error);
        }
    }

    async getStateById(req, res) {
        try {
            const { id } = req.params;
            const data = await statesService.getStateById(id);
            return res.json(data);
        } catch (error) {
            ErrorHandler.handleHttp(res, error);
        }
    }

    async addState(req, res) {
        try {
            const { body } = req;

            const dataResponse = await statesService.addState(body);

            return res.json({ id_estado: dataResponse.id_estado });
        } catch (error) {
            ErrorHandler.handleHttp(res, error);
        }
    }
}

module.exports = StatesController;
