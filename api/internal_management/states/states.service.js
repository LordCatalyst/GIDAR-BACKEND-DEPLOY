const { Validator } = require("../../../utils/validator");
const { SystemMessage } = require("../../../utils/systemMessage");
const { StatesModel } = require("./states.model");

class StatesService {
    async getStates() {
        let data = await StatesModel.findAll({ nest: true, raw: true });

        if (!data) {
            data = {};
        }

        return data;
    }

    async getStateById(id) {
        let data = await StatesModel.findAll({
            nest: true,
            raw: true,
            where: { id_estado: id }
        });

        if (!data) {
            data = {};
        }

        return data;
    }

    async addState(data) {
        const validFields = Validator.checkArrayInObject(["descripcion"], data);

        if (!validFields) {
            const error = new Error();
            error.status = 400;
            error.name = SystemMessage.BAD_REQUEST;
            throw error;
        }

        const createdState = await StatesModel.create(data);
        return createdState;
    }
}

module.exports = { StatesService };
