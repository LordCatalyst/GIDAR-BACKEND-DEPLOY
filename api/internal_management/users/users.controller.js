const { UsersService } = require("./users.service");
const { ErrorHandler } = require("../../../utils/error.handler");
const usersService = new UsersService();

class UsersController {
    async getUsers(req, res) {
        try {
            const data = await usersService.getUsers();
            return res.json(data);
        } catch (error) {
            ErrorHandler.handleHttp(req, error);
        }
    }

    async getUser(req, res) {
        try {
            const { username } = req.params;
            const data = await usersService.getUser(username);
            return res.json(data);
        } catch (error) {
            ErrorHandler.handleHttp(res, error);
        }
    }

    async addUser(req, res) {
        try {
            const { body } = req;

            const dataResponse = await usersService.addUser(body);

            return res.json({ id_usuario: dataResponse.id_usuario });
        } catch (error) {
            console.log(error);
            ErrorHandler.handleHttp(res, error);
        }
    }
}

module.exports = UsersController;
