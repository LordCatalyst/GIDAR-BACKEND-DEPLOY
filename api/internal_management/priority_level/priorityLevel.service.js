const { Validator } = require("../../../utils/validator");
const { SystemMessage } = require("../../../utils/systemMessage");
const { PriorityLevelModel } = require("./priorityLevel.model");

class PriorityLevelService {
    async getPriorityLevels() {
        let data = await PriorityLevelModel.findAll({ nest: true, raw: true });

        if (!data) {
            data = {};
        }

        return data;
    }

    async getPriorityLevelById(id) {
        let data = await PriorityLevelModel.findAll({
            nest: true,
            raw: true,
            where: { id_prioridad: id }
        });

        if (!data) {
            data = {};
        }

        return data;
    }

    async addPriorityLevel(data) {
        const validFields = Validator.checkArrayInObject(["descripcion"], data);

        if (!validFields) {
            const error = new Error();
            error.status = 400;
            error.name = SystemMessage.BAD_REQUEST;
            throw error;
        }

        const createdPriorityLevel = await PriorityLevelModel.create(data);
        return createdPriorityLevel;
    }
}

module.exports = { PriorityLevelService };
