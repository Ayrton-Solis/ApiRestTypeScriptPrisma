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
exports.ServiceUser = void 0;
const user_repository_1 = require("../repository/user.repository");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const create_token_1 = require("../tokens/create.token");
class ServiceUser {
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, name, password } = req.body;
                if (!email || !name || !password) {
                    res.status(400).json({ message: 'Please complete all fields ' });
                }
                ;
                const hash = yield bcryptjs_1.default.hash(password, 10);
                const { id } = yield user_repository_1.RepositoryUser.create(email, name, hash);
                // Este parametro solo puede resivir string, objeto o buffer, por eso es un objeto en vez de un number directo
                const token = yield (0, create_token_1.createAccesToken)({ id: id });
                return token;
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
                const users = yield user_repository_1.RepositoryUser.find();
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
                yield user_repository_1.RepositoryUser.update(id, email, name);
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
                user_repository_1.RepositoryUser.delete(id);
            }
            catch (error) {
                console.log(error);
            }
            ;
        });
    }
    ;
    static login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const user = yield user_repository_1.RepositoryUser.findUnique(email);
                if (!user) {
                    res.status(400).json({ message: 'user not found' });
                }
                ;
                const isMatch = yield bcryptjs_1.default.compare(password, user === null || user === void 0 ? void 0 : user.password);
                if (!isMatch) {
                    res.status(400).json({ message: 'incorrect password' });
                }
                ;
                // Este parametro solo puede resivir string, objeto o buffer, por eso es un objeto en vez de un number directo
                const token = yield (0, create_token_1.createAccesToken)({ id: user === null || user === void 0 ? void 0 : user.id });
                res.cookie('token', token).json({ meesage: `Felicidades ${user === null || user === void 0 ? void 0 : user.name}, Logeo exitoso` });
            }
            catch (error) {
                console.log(error);
            }
            ;
        });
    }
    ;
    static logout(req, res) {
        try {
            res.cookie('token', '', { expires: new Date(0) }).json({ message: 'logout successfully' });
        }
        catch (error) {
            console.log(error);
        }
    }
    ;
    static profile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('por aca tambien anda todo bien');
            res.send('hola, funciona todo bien hasta aca');
        });
    }
}
exports.ServiceUser = ServiceUser;
;
