"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser = void 0;
var CreateUser = function (req, res, next) {
    try {
        var _a = req.body, email = _a.email, password = _a.password;
        //TODO : Add validate Data (Email)
        if (!email.trim() || !password.trim()) {
            res.status(400).json({ message: 'Email or Password is Empty' });
        }
    }
    catch (error) {
        next(error);
    }
};
exports.CreateUser = CreateUser;
