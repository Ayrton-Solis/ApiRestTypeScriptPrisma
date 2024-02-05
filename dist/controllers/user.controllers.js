"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const db_1 = __importDefault(require("../db"));
class user {
    static findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allUsers = yield db_1.default.user.findMany();
                console.log(allUsers);
                return res.json(allUsers);
            }
            catch (error) {
                console.log(error);
                return res.status(500).json('Internal server error');
            }
        });
    }
    static createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newUser = yield db_1.default.user.create({
                    data: req.body,
                });
                console.log('olabarria');
                return res.json(newUser);
            }
            catch (error) {
                console.log(error);
                return res.status(500).json('Internal server error');
            }
        });
    }
}
exports.user = user;
;
