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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceUser = void 0;
const user_repository_1 = require("../repository/user.repository");
class ServiceUser {
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, name, password } = req.body;
                yield user_repository_1.DataBaseUser.create(email, name, password);
            }
            catch (error) {
                console.log(error);
            }
            ;
        });
    }
    ;
    static find(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield user_repository_1.DataBaseUser.find();
                return res.json(users);
            }
            catch (error) {
                console.log(error);
            }
            ;
        });
    }
    ;
    static update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, name } = req.body;
                const id = Number(req.params.id);
                yield user_repository_1.DataBaseUser.update(id, email, name);
            }
            catch (error) {
                console.log(error);
            }
            ;
        });
    }
    ;
    static delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                user_repository_1.DataBaseUser.delete(id);
            }
            catch (error) {
                console.log(error);
            }
            ;
        });
    }
    ;
    static findById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const user = yield user_repository_1.DataBaseUser.findById(id);
                return res.json(user);
            }
            catch (error) {
                console.log(error);
            }
            ;
        });
    }
    ;
}
exports.ServiceUser = ServiceUser;
;
