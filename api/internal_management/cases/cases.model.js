const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../../../config/sequelize.config");
const { SystemMessage } = require("../../../utils/systemMessage");
const { UsersModel } = require("../users/users.model");
const { DependenciesModel } = require("../dependencies/dependencies.model");
const { CaseTypeModel } = require("../case_type/caseType.model");
const { ResponsibleModel } = require("../responsible/responsible.model");
const { StatesModel } = require("../states/states.model");

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

CasesModel.hasOne(DependenciesModel, {
    foreignKey: "id_dependencia",
    sourceKey: "id_dependencia",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION"
});

CasesModel.hasOne(UsersModel, {
    foreignKey: "id_usuario",
    sourceKey: "id_usuario",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION"
});

CasesModel.hasOne(CaseTypeModel, {
    foreignKey: "id_tipo_caso",
    sourceKey: "id_tipo_caso",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION"
});

CasesModel.hasOne(ResponsibleModel, {
    foreignKey: "id_responsable",
    sourceKey: "id_responsable",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION"
});

CasesModel.hasOne(StatesModel,{
    foreignKey: "id_estado",
    sourceKey: "id_estado",
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION"
});
module.exports = { CasesModel };
