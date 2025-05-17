"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismaClient = void 0;
var express_1 = __importDefault(require("express"));
var config_1 = __importDefault(require("./config/config"));
var client_1 = require("@prisma/client");
var rootRouter_1 = __importDefault(require("./routes/rootRouter"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
exports.prismaClient = new client_1.PrismaClient();
app.get('/', function (req, res) {
    res.send('Working');
});
app.use('/api', rootRouter_1.default);
app.listen(config_1.default.port, function () {
    console.log("Connected Successfully on port ".concat(config_1.default.port));
});
