const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../../../config/sequelize.config");
const { SystemMessage } = require("../../../utils/systemMessage");

class RolesModel extends Model {}

RolesModel.init(
    {
        id_rol: {
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
        }
    },
    {
        sequelize,
        modelName: "roles",
        schema: "gestion_interna",
        tableName: "roles",
        createdAt: false,
        updatedAt: false,
        deletedAt: false
    }
);

module.exports = { RolesModel };
