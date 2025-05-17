"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var SignUp_1 = require("../controllers/User/SignUp");
var userRoutes = (0, express_1.Router)();
userRoutes.post('/signup', SignUp_1.CreateUser);
exports.default = userRoutes;
