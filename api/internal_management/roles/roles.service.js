const { Validator } = require("../../../utils/validator");
const { SystemMessage } = require("../../../utils/systemMessage");
const { RolesModel } = require("./roles.model");

class RolesService {
    async getRoles() {
        let data = await RolesModel.findAll({ nest: true, raw: true });

        if (!data) {
            data = {};
        }

        return data;
    }

    async getRoleById(id) {
        let data = await RolesModel.findAll({
            nest: true,
            raw: true,
            where: { id_rol: id }
        });

        if (!data) {
            data = {};
        }

        return data;
    }

    async addRole(data) {
        const validFields = Validator.checkArrayInObject(["descripcion"], data);

        if (!validFields) {
            const error = new Error();
            error.status = 400;
            error.name = SystemMessage.BAD_REQUEST;
            throw error;
        }

        const createdRole = await RolesModel.create(data);
        return createdRole;
    }
}

module.exports = { RolesService };
