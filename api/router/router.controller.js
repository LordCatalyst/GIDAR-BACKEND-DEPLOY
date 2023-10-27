const fs = require("fs");
const { join } = require("path");
const { logger } = require("sequelize/lib/utils/logger");

class RouterController {
    static getRoutesPath(dirName) {
        let files = [];
        const folderItems = fs.readdirSync(dirName, { withFileTypes: true });

        for (const item of folderItems) {
            if (item.isDirectory()) {
                files = [
                    ...files,
                    ...this.getRoutesPath(join(dirName, item.name))
                ];
            } else {
                files.push(join(dirName, item.name));
            }
        }

        return files.filter((dir) => {
            return dir.split(".")[1] === "router";
        });
    }

    static setRoutes(expressApp, rootPath) {
        const routes = RouterController.getRoutesPath(rootPath);
        routes.forEach((route) => {
            const importedRoute = require(route);
            expressApp.use("/api/", importedRoute);
        });
    }
}

module.exports = { RouterController };
