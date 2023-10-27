const { Validator } = require("../../../utils/validator");
const { SystemMessage } = require("../../../utils/systemMessage");
const { DependenciesModel } = require("./dependencies.model");

class DependenciesService {
    async getDependencies() {
        let data = await DependenciesModel.findAll({ nest: true, raw: true });

        if (!data) {
            data = {};
        }

        return data;
    }

    async getDependecyById(id) {
        let data = await DependenciesModel.findAll({
            nest: true,
            raw: true,
            where: { id_dependencia: id }
        });

        if (!data) {
            data = {};
        }

        return data;
    }

    async addDependency(data) {
        const validFields = Validator.checkArrayInObject(["descripcion"], data);

        if (!validFields) {
            const error = new Error();
            error.status = 400;
            error.name = SystemMessage.BAD_REQUEST;
            throw error;
        }

        const createdDependency = await DependenciesModel.create(data);
        return createdDependency;
    }
}

module.exports = { DependenciesService };
