const { SessionService } = require("./session.service");
const { ErrorHandler } = require("../../utils/error.handler");
const { responseWithCustomHeader } = require("../../utils/custom.header");
const sessionService = new SessionService();
// const jwt = require("jsonwebtoken");
class SessionController {
    async verifySessionAttempt(req, res) {
        try {
            const { nombre_usuario, contrasena } = req.body;
            const verification = await sessionService.verifyLoginAttempt(
                nombre_usuario,
                contrasena
            );
            // const token = await jwt.sign(verification, "$$DARZULIAD3V$$");
            // res.cookie("Sesión", token);
            return res.json(verification)
        } catch (error) {
            return ErrorHandler.handleHttp(res, error);
        }
    }
}

module.exports = { SessionController };
