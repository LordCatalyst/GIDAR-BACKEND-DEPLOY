const { DependenciesService } = require("./dependencies.service");
const { ErrorHandler } = require("../../../utils/error.handler");
const dependenciesService = new DependenciesService();

class DependenciesController {
    async getDependencies(req, res) {
        try {
            const data = await dependenciesService.getDependencies();
            return res.json(data);
        } catch (error) {
            ErrorHandler.handleHttp(req, error);
        }
    }

    async getDependencyById(req, res) {
        try {
            const { id } = req.params;
            const data = await dependenciesService.getDependecyById(id);
            return res.json(data);
        } catch (error) {
            ErrorHandler.handleHttp(res, error);
        }
    }

    async addDependency(req, res) {
        try {
            const { body } = req;

            const dataResponse = await dependenciesService.addDependency(body);

            return res.json({ id_dependencia: dataResponse.id_dependencia });
        } catch (error) {
            ErrorHandler.handleHttp(res, error);
        }
    }
}

module.exports = DependenciesController;
