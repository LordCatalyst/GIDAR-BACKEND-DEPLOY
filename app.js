const express = require("express");
const cors = require("cors");
const { query } = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const configPath = path.join(__dirname, "/config/.env");
const { RouterController } = require("./api/router/router.controller");
const { ErrorHandler } = require("./utils/error.handler");

require("dotenv").config({ path: configPath });

const app = express();

const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer(app);
const io = new Server(httpServer, {
    /* Options */
});

io.on("connection", (socket) => {
    socket.on("connection", (data) => {
        console.log("Probando", data);
    });
});

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(query());

app.use((err, req, res, _next) => {
    ErrorHandler.handleHttp(res, err);
});

const rootPath = path.join(__dirname, "api");
RouterController.setRoutes(app, rootPath);

httpServer.listen(3000, () => {
    console.log("Listening socket on port: 3000");
});
/* App.listen(process.env.DEV_SERVER_PORT, () => {
    console.log(`Port listening on: ${process.env.DEV_SERVER_PORT}`);
}); */
