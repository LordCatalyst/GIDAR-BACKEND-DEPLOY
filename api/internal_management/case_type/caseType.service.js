const { Validator } = require("../../../utils/validator");
const { SystemMessage } = require("../../../utils/systemMessage");
const { CaseTypeModel } = require("./caseType.model");

class CaseTypeService {
    async getCaseTypes() {
        let data = await CaseTypeModel.findAll({ nest: true, raw: true });

        if (!data) {
            data = {};
        }

        return data;
    }

    async getCaseType(id) {
        let data = await CaseTypeModel.findAll({
            nest: true,
            raw: true,
            where: { id_tipo_caso: id }
        });

        if (!data) {
            data = {};
        }

        return data;
    }

    async addCaseType(data) {
        const validFields = Validator.checkArrayInObject(
            ["descripcion", "id_prioridad"],
            data
        );

        if (!validFields) {
            const error = new Error();
            error.status = 400;
            error.name = SystemMessage.BAD_REQUEST;
            throw error;
        }

        const createdCaseType = await CaseTypeModel.create(data);
        return createdCaseType;
    }
}

module.exports = { CaseTypeService };
