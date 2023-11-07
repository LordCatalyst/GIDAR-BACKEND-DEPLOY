const { SystemMessage } = require("../../utils/systemMessage");
const { UsersService } = require("../internal_management/users/users.service");

const usersService = new UsersService();

class SessionService {
    async verifyLoginAttempt(username, password) {
        const user = await usersService.getUser(username);
        if (user.length === 0) {
            const error = new Error();
            error.status = 404;
            error.name = SystemMessage.INVALID_USERNAME;
            throw error;
        }

        if (!(password === user[0].contrasena)) {
            const error = new Error();
            error.status = 404;
            error.name = SystemMessage.INVALID_PASSWORD;
            throw error;
        }

        return user;
    }
}

module.exports = { SessionService };
