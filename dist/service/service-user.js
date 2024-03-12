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
const repositoy_user_1 = require("../repository/repositoy-user");
class ServiceUser {
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, name } = req.body;
                yield repositoy_user_1.DataBaseUser.create(email, name);
                return res.status(200).json('user created successfully');
            }
            catch (error) {
                console.log(error);
                return res.status(500).json('internal service error' + error);
            }
            ;
        });
    }
    ;
    static find(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield repositoy_user_1.DataBaseUser.find();
                return res.status(200).json(users);
            }
            catch (error) {
                console.log(error);
                return res.status(500).json('internal service error' + error);
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
                yield repositoy_user_1.DataBaseUser.update(id, email, name);
                return res.status(200).json('user updated successfully');
            }
            catch (error) {
                return res.status(500).json('internal server error' + error);
            }
            ;
        });
    }
    ;
    static delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                repositoy_user_1.DataBaseUser.delete(id);
                return res.status(200).json('user deleted successfully');
            }
            catch (error) {
                return res.status(500).json('internal server error' + error);
            }
            ;
        });
    }
    ;
    static findById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = Number(req.params.id);
                const user = yield repositoy_user_1.DataBaseUser.findById(id);
                return res.status(200).json(user);
            }
            catch (error) {
                return res.status(500).json('internal server error' + error);
            }
            ;
        });
    }
    ;
}
exports.ServiceUser = ServiceUser;
;
