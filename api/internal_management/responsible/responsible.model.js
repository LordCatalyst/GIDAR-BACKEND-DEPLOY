const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../../../config/sequelize.config");
const { SystemMessage } = require("../../../utils/systemMessage");
const { UsersModel } = require("../users/users.model");

class ResponsibleModel extends Model {}

ResponsibleModel.init(
    {
        id_responsable: {
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
        }
    },
    {
        sequelize,
        modelName: "responsables",
        schema: "gestion_interna",
        tableName: "responsables",
        createdAt: false,
        updatedAt: false,
        deletedAt: false
    }
);

ResponsibleModel.hasOne(UsersModel,
    {
        foreignKey: "id_usuario",
        sourceKey: "id_usuario",
        onDelete: "NO ACTION",
        onUpdate: "NO ACTION"
    });

module.exports = { ResponsibleModel };
