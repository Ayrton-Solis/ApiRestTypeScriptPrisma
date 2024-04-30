"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAccesToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("./config");
function createAccesToken(payload) {
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.default.sign(payload, config_1.TOKEN_SECRET, { expiresIn: "1d", }, (error, token) => {
            if (error)
                reject(error);
            resolve(token);
        });
    });
}
exports.createAccesToken = createAccesToken;
