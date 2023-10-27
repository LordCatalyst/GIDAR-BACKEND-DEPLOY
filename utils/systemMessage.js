class SystemMessage {
    static IPV4_ERROR = "Sólo se permiten direcciones IPv4";
    static ALPHA_ERROR = "Sólo se permiten caracteres";
    static INT_ERROR = "Sólo se permiten valores numéricos";
    static INT_1_ERROR = "Sólo se permiten valores numéricos mayores a 1";
    static CHAR_5_ERROR = "Sólo se permiten un máximo de 5 caracteres";
    static CHAR_10_ERROR = "Sólo se permiten un máximo de 10 caracteres";
    static CHAR_15_ERROR = "Sólo se permiten un máximo de 15 caracteres";
    static CHAR_20_ERROR = "Sólo se permiten un máximo de 20 caracteres";
    static CHAR_25_ERROR = "Sólo se permiten un máximo de 25 caracteres";
    static CHAR_50_ERROR = "Sólo se permiten un máximo de 50 caracteres";
    static CHAR_60_ERROR = "Sólo se permiten un máximo de 60 caracteres";
    static CHAR_65_ERROR = "Sólo se permiten un máximo de 65 caracteres";
    static CHAR_100_ERROR = "Sólo se permiten un máximo de 100 caracteres";
    static CHAR_150_ERROR = "Sólo se permiten un máximo de 150 caracteres";
    static CHAR_255_ERROR = "Sólo se permiten un máximo de 255 caracteres";
    static DB_CONNECTION_ERROR = "Error de Conexion";
    static VALIDATION_ERROR = "Error de Validacion";
    static SERVER_ERROR = "Error interno";
    static DATA_ALREADY_EXIST = "Error el dato ya existe";
    static DATA_NOT_FOUND = "No se ha encontrado coincidencias";
    static DATA_UPDATED = "Se actualizo correctamente";
    static DATA_NOT_UPDATED = "Se actualizo correctamente";
    static BAD_REQUEST = "Bad Request";
    static NOT_ACCEPTABLE = "Not Acceptable";
    static INVALID_PASSWORD = "Invalid Password";
    static VALID_PASSWORD = "Valid Password";
    static INVALID_USERNAME = "Invalid Username";
}

module.exports = { SystemMessage };
