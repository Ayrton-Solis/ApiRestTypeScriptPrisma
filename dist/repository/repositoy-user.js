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
exports.DataBaseUser = void 0;
const prisma_client_1 = __importDefault(require("../prisma-client"));
class DataBaseUser {
    static create(email, name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma_client_1.default.user.create({
                    data: {
                        email: email,
                        name: name
                    }
                });
            }
            catch (error) {
                console.log(error);
            }
            ;
        });
    }
    ;
    static find() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield prisma_client_1.default.user.findMany();
            }
            catch (error) {
                console.log(error);
            }
            ;
        });
    }
    ;
    static update(id, email, name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma_client_1.default.user.update({
                    where: {
                        id: id,
                    },
                    data: {
                        name: name,
                        email: email,
                    },
                });
            }
            catch (error) {
                console.log(error);
            }
            ;
        });
    }
    ;
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma_client_1.default.user.delete({
                    where: {
                        id: id,
                    }
                });
            }
            catch (error) {
                console.log(error);
            }
            ;
        });
    }
    ;
    static findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield prisma_client_1.default.user.findUnique({
                    where: {
                        id: id,
                    }
                });
            }
            catch (error) {
                console.log(error);
            }
            ;
        });
    }
    ;
}
exports.DataBaseUser = DataBaseUser;
;
