const { Sequelize } = require("sequelize");

const path = require("path");
const configPath = path.join(__dirname, "../config/.env");

require("dotenv").config({ path: configPath });

const sequelize = new Sequelize(
    process.env.DEV_DATABASE_NAME,
    process.env.DEV_DATABASE_USERNAME,
    process.env.DEV_DATABASE_PASSWORD,
    {
        dialect: "postgres",
        host: process.env.DEV_DATABASE_URL,
        dialectOptions: {
            ssl: true,
            native: true
        }
    }
);

module.exports = { sequelize };
