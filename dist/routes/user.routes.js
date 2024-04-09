"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controllers_1 = require("../controllers/user.controllers");
const router = (0, express_1.Router)();
router.get('/user', user_controllers_1.User.findAll);
router.post('/user', user_controllers_1.User.createUser);
router.put('/user/:id', user_controllers_1.User.updateUser);
router.delete('/user/:id', user_controllers_1.User.deleteUser);
router.post('/login', user_controllers_1.User.login);
router.post('/logout', user_controllers_1.User.logout);
exports.default = router;
