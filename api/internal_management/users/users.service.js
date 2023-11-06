const { Validator } = require("../../../utils/validator");
const { SystemMessage } = require("../../../utils/systemMessage");
const { UsersModel } = require("./users.model");

class UsersService {
    async getUsers() {
        let data = await UsersModel.findAll({ nest: true, raw: true });

        if (!data) {
            data = {};
        }

        return data;
    }

    async getUser(username) {
        let data = await UsersModel.findAll({
            nest: true,
            raw: true,
            where: { id_usuario: username.toUpperCase() }
        });

        if (!data) {
            data = {};
        }

        return data;
    }

    async addUser(data) {
        const validFields = Validator.checkArrayInObject(
            [
                "nombre_usuario",
                "contrasena",
                "primer_nombre",
                "primer_apellido",
                "id_dependencia",
                "id_rol"
            ],
            data
        );

        if (!validFields) {
            const error = new Error();
            error.status = 400;
            error.name = SystemMessage.BAD_REQUEST;
            throw error;
        }

        const createdUser = await UsersModel.create(data);
        return createdUser;
    }
}

module.exports = { UsersService };
