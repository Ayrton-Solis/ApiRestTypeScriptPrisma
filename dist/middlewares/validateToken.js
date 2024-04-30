"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRequired = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../tokens/config");
const authRequired = (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return res.json({ message: 'No token, authorization denied' });
    }
    jsonwebtoken_1.default.verify(token, config_1.TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ 'message': 'Invalid token' });
        }
        ;
        console.log(user);
    });
    next();
};
exports.authRequired = authRequired;
