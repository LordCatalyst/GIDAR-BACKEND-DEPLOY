const { Validator } = require("../../../utils/validator");
const { SystemMessage } = require("../../../utils/systemMessage");
const { CasesModel } = require("./cases.model");

class CasesService {
    async getCases() {
        let data = await CasesModel.findAll({
            nest: true,
            raw: true,
            include: { all: true, nested: true }
        });

        if (!data) {
            data = {};
        }

        return data;
    }

    async getCasesById(id) {
        let data = await CasesModel.findAll({
            nest: true,
            raw: true,
            where: { id_caso: id },
            include: { all: true, nested: true }
        });

        if (!data) {
            data = {};
        }

        return data;
    }

    async getCasesByResponsible(responsible) {
        let data = await CasesModel.findAll({
            nest: true,
            raw: true,
            where: { id_responsable: responsible },
            include: { all: true, nested: true }
        });

        if (!data) {
            data = {};
        }

        return data;
    }

    async getCasesByDependency(dependencyId) {
        let data = await CasesModel.findAll({
            nest: true,
            raw: true,
            where: { id_dependencia: dependencyId },
            include: { all: true, nested: true }
        });

        if (!data) {
            data = {};
        }

        return data;
    }

    async getCasesByDependencyAndStatus(dependencyId, status) {
        let data = await CasesModel.findAll({
            nest: true,
            raw: true,
            where: { id_dependencia: dependencyId, id_estado: status },
            include: { all: true, nested: true }
        });

        if (!data) {
            data = {};
        }

        return data;
    }

    async getCasesByResponsibleAndStatus(responsible, status) {
        let data = await CasesModel.findAll({
            nest: true,
            raw: true,
            where: { id_responsable: responsible, id_estado: status },
            include: { all: true, nested: true }
        });

        if (!data) {
            data = {};
        }

        return data;
    }

    async getCasesByState(state) {
        let data = await CasesModel.findAll({
            nest: true,
            raw: true,
            where: { id_estado: state },
            include: { all: true, nested: true }
        });

        if (!data) {
            data = {};
        }

        return data;
    }

    async putCase(caseId, status, responsible) {
        const data = await CasesModel.update(
            { id_estado: status, id_responsable: responsible },
            { where: { id_caso: caseId } }
        );
        const isRowAffected = data[0] > 0;
        if (!isRowAffected) {
            const error = new Error();
            error.status = 404;
            error.name = SystemMessage.DATA_NOT_FOUND;
            throw error;
        }

        return SystemMessage.DATA_UPDATED;
    }

    async addCase(data) {
        const validFields = Validator.checkArrayInObject(
            [
                "id_usuario",
                "id_dependencia",
                "id_tipo_caso",
                "asunto",
                "descripcion_breve"
            ],
            data
        );

        if (!validFields) {
            const error = new Error();
            error.status = 400;
            error.name = SystemMessage.BAD_REQUEST;
            throw error;
        }

        const createdCase = await CasesModel.create(data);
        return createdCase;
    }
}

module.exports = { CasesService };
