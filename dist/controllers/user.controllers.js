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
exports.User = void 0;
const user_service_1 = require("../service/user-service");
class User {
    static findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                user_service_1.ServiceUser.find(req, res);
                return res.status(200);
            }
            catch (error) {
                console.log(error);
                return res.status(500).json('internal service error' + error);
            }
            ;
        });
    }
    ;
    static createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = yield user_service_1.ServiceUser.create(req, res);
                return res.cookie('token', token).json('user created successfully');
            }
            catch (error) {
                console.log(error);
                return res.status(500).json('internal service error' + error);
            }
            ;
        });
    }
    ;
    static updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                user_service_1.ServiceUser.update(req, res);
                return res.status(200).json('user updated successfully');
            }
            catch (error) {
                console.log(error);
                return res.status(500).json('internal server error' + error);
            }
            ;
        });
    }
    ;
    static deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                user_service_1.ServiceUser.delete(req, res);
                return res.status(200).json('user deleted successfully');
            }
            catch (error) {
                return res.status(500).json('internal server error' + error);
            }
            ;
        });
    }
    ;
    static login(req, res) {
        try {
            user_service_1.ServiceUser.login(req, res);
            res.status(200);
        }
        catch (error) {
            return res.status(500).json('internal server error' + error);
        }
        ;
    }
    ;
    static logout(req, res) {
        user_service_1.ServiceUser.logout(req, res);
        return res.status(200);
    }
    ;
    static profile(req, res) {
        user_service_1.ServiceUser.profile(req, res);
    }
    ;
}
exports.User = User;
;
