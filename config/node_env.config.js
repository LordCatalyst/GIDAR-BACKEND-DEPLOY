const path = require("path");
const configPath = path.join(__dirname, ".env");
require("dotenv").config({ path: configPath });

const CONFIGS = {};

if (process.env.NODE_ENV === "development") {
    CONFIGS.SERVER_PORT = process.env.DEV_PORT;
    CONFIGS.DATABASE_URL = process.env.DEV_DATABASE_URL;
} else if (process.env.NODE_ENV === "production") {
    CONFIGS.SERVER_PORT = process.env.PROD_PORT;
    CONFIGS.DATABASE_URL = process.env.PROD_DATABASE_URL;
}

module.exports = {
    CONFIGS
};
