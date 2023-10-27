const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../../../config/sequelize.config");
const { SystemMessage } = require("../../../utils/systemMessage");

class CasesModel extends Model {}

CasesModel.init(
    {
        id_caso: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            validate: {
                min: { args: 1, msg: SystemMessage.INT_1_ERROR },
                isInt: { args: true, msg: SystemMessage.INT_ERROR }
            }
        },
        id_usuario: {
            type: DataTypes.INTEGER,
            validate: {
                min: { args: 1, msg: SystemMessage.INT_1_ERROR },
                isInt: { args: true, msg: SystemMessage.INT_ERROR }
            }
        },
        id_dependencia: {
            type: DataTypes.INTEGER,
            validate: {
                min: { args: 1, msg: SystemMessage.INT_1_ERROR },
                isInt: { args: true, msg: SystemMessage.INT_ERROR }
            }
        },
        id_tipo_caso: {
            type: DataTypes.INTEGER,
            validate: {
                min: { args: 1, msg: SystemMessage.INT_1_ERROR },
                isInt: { args: true, msg: SystemMessage.INT_ERROR }
            }
        },
        id_responsable: {
            type: DataTypes.INTEGER,
            validate: {
                min: { args: 1, msg: SystemMessage.INT_1_ERROR },
                isInt: { args: true, msg: SystemMessage.INT_ERROR }
            },
            allowNull: true
        },
        id_estado: {
            type: DataTypes.INTEGER,
            validate: {
                min: { args: 1, msg: SystemMessage.INT_1_ERROR },
                isInt: { args: true, msg: SystemMessage.INT_ERROR }
            },
            defaultValue: 1
        },
        fecha_requerimiento: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        asunto: {
            type: DataTypes.CHAR(50),
            allowNull: false,
            validate: {
                len: { args: [5, 50], msg: SystemMessage.CHAR_50_ERROR }
            }
        },
        descripcion_breve: {
            type: DataTypes.CHAR(150),
            allowNull: false,
            validate: {
                len: { args: [5, 150], msg: SystemMessage.CHAR_150_ERROR }
            }
        }
    },
    {
        sequelize,
        modelName: "casos",
        schema: "gestion_interna",
        tableName: "casos",
        createdAt: false,
        updatedAt: false,
        deletedAt: false
    }
);

module.exports = { CasesModel };
