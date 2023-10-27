const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../../../config/sequelize.config");
const { SystemMessage } = require("../../../utils/systemMessage");

class CaseTypeModel extends Model {}

CaseTypeModel.init(
    {
        id_tipo_caso: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            validate: {
                min: { args: 1, msg: SystemMessage.INT_1_ERROR },
                isInt: { args: true, msg: SystemMessage.INT_ERROR }
            }
        },
        descripcion: {
            type: DataTypes.CHAR(100),
            allowNull: false,
            validate: {
                len: { args: [5, 100], msg: SystemMessage.CHAR_100_ERROR }
            }
        },
        id_prioridad: {
            type: DataTypes.INTEGER,
            validate: {
                min: { args: 1, msg: SystemMessage.INT_1_ERROR },
                isInt: { args: true, msg: SystemMessage.INT_ERROR }
            }
        }
    },
    {
        sequelize,
        modelName: "tipo_casos",
        schema: "gestion_interna",
        tableName: "tipo_casos",
        createdAt: false,
        updatedAt: false,
        deletedAt: false
    }
);

module.exports = { CaseTypeModel };
