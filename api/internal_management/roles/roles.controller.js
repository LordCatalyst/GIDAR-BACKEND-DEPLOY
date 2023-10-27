const { RolesService } = require("./roles.service");
const { ErrorHandler } = require("../../../utils/error.handler");
const rolesService = new RolesService();

class RolesController {
    async getRoles(req, res) {
        try {
            const data = await rolesService.getRoles();
            return res.json(data);
        } catch (error) {
            ErrorHandler.handleHttp(req, error);
        }
    }

    async getRoleById(req, res) {
        try {
            const { id } = req.params;
            const data = await rolesService.getRoleById(id);
            return res.json(data);
        } catch (error) {
            ErrorHandler.handleHttp(res, error);
        }
    }

    async addRole(req, res) {
        try {
            const { body } = req;

            const dataResponse = await rolesService.addRole(body);

            return res.json({ id_rol: dataResponse.id_rol });
        } catch (error) {
            ErrorHandler.handleHttp(res, error);
        }
    }
}

module.exports = RolesController;
