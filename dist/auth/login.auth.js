"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authLogin = void 0;
function authLogin(email) {
    if (!email) {
        const error = { message: 'El usuario no existe' };
        return error;
    }
}
exports.authLogin = authLogin;
;
