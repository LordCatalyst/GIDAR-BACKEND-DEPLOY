const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../../../config/sequelize.config");
const { SystemMessage } = require("../../../utils/systemMessage");

class StatesModel extends Model {}

StatesModel.init(
    {
        id_estado: {
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
        modelName: "estados",
        schema: "gestion_interna",
        tableName: "estados",
        createdAt: false,
        updatedAt: false,
        deletedAt: false
    }
);

module.exports = { StatesModel };
