const { Validator } = require("../../../utils/validator");
const { SystemMessage } = require("../../../utils/systemMessage");
const { ResponsibleModel } = require("./responsible.model");

class ResponsibleService {
    async getResponsibles() {
        let data = await ResponsibleModel.findAll({
            nest: true,
            raw: true,
            include: { all: true, nested: true }
        });

        if (!data) {
            data = {};
        }

        return data;
    }

    async getResponsibleById(id) {
        let data = await ResponsibleModel.findAll({
            nest: true,
            raw: true,
            where: { id_responsable: id },
            include: { all: true, nested: true }
        });

        if (!data) {
            data = {};
        }

        return data;
    }

    async addResponsible(data) {
        const validFields = Validator.checkArrayInObject(["id_usuario"], data);

        if (!validFields) {
            const error = new Error();
            error.status = 400;
            error.name = SystemMessage.BAD_REQUEST;
            throw error;
        }

        const createdResponsible = await ResponsibleModel.create(data);
        return createdResponsible;
    }
}

module.exports = { ResponsibleService };
