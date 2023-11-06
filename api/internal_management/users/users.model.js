const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../../../config/sequelize.config");
const { SystemMessage } = require("../../../utils/systemMessage");
const { DependenciesModel } = require("../dependencies/dependencies.model");
const { RolesModel } = require("../roles/roles.model");

class UsersModel extends Model {}

UsersModel.init(
    {
        id_usuario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            validate: {
                min: { args: 1, msg: SystemMessage.INT_1_ERROR },
                isInt: { args: true, msg: SystemMessage.INT_ERROR }
            }
        },
        nombre_usuario: {
            type: DataTypes.CHAR(10),
            allowNull: false,
            validate: {
                len: { args: [8, 10], msg: SystemMessage.CHAR_10_ERROR }
            }
        },
        contrasena: {
            type: DataTypes.CHAR(255),
            allowNull: false,
            validate: {
                len: { args: [5, 255], msg: SystemMessage.CHAR_255_ERROR }
            }
        },
        estado_cuenta: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        primer_nombre: {
            type: DataTypes.CHAR(15),
            allowNull: false,
            validate: {
                len: { args: [2, 15], msg: SystemMessage.CHAR_15_ERROR }
            }
        },
        primer_apellido: {
            type: DataTypes.CHAR(15),
            allowNull: false,
            validate: {
                len: { args: [2, 15], msg: SystemMessage.CHAR_15_ERROR }
            }
        },
        id_dependencia: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: { args: 1, msg: SystemMessage.INT_1_ERROR },
                isInt: { args: true, msg: SystemMessage.INT_ERROR }
            }
        },
        id_rol: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: { args: 1, msg: SystemMessage.INT_1_ERROR },
                isInt: { args: true, msg: SystemMessage.INT_ERROR }
            }
        }
    },
    {
        sequelize,
        modelName: "usuarios",
        schema: "gestion_interna",
        tableName: "usuarios",
        createdAt: false,
        updatedAt: false,
        deletedAt: false
    }
);

UsersModel.hasOne(DependenciesModel,{
    foreignKey: "id_dependencia",
    sourceKey: "id_dependencia",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION"
});

UsersModel.hasOne(RolesModel,{
    foreignKey: "id_rol",
    sourceKey: "id_rol",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION"
});

module.exports = { UsersModel };
