const { SystemMessage } = require("./systemMessage");
const { responseWithCustomHeader } = require("./custom.header");

class ErrorHandler extends SystemMessage {
    static handleHttp(res, err) {
        const result = {};

        if (
            err.name === "SequelizeConnectionError" ||
            err.name === "SequelizeHostNotReachableError"
        ) {
            result.code = "503";
            result.msg = super.DB_CONNECTION_ERROR;
        } else if (err.name === super.NOT_ACCEPTABLE) {
            result.code = "406";
            result.msg = super.NOT_ACCEPTABLE;
        } else if (err.name === super.DATA_NOT_FOUND) {
            result.code = "404";
            result.msg = err.DATA_NOT_FOUND;
        } else if (
            err.name === "SequelizeValidationError" ||
            err.name === "SequelizeForeignKeyConstraintError" ||
            err.name === "SequelizeDatabaseError" ||
            err.name === super.BAD_REQUEST ||
            err instanceof SyntaxError
        ) {
            result.code = "400";
            result.msg = super.VALIDATION_ERROR;
        } else if (err.name === "SequelizeUniqueConstraintError") {
            result.code = "400";
            result.msg = super.DATA_ALREADY_EXIST;
        } else if (err.name === super.INVALID_PASSWORD) {
            result.code = "404";
            result.msg = super.INVALID_PASSWORD;
        } else if (err.name === super.INVALID_USERNAME) {
            result.code = "404";
            result.msg = super.INVALID_USERNAME;
        }

        responseWithCustomHeader(res, result.code, result.msg, "{}");
    }
}

module.exports = { ErrorHandler };
