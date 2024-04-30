"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controllers_1 = require("../controllers/user.controllers");
const validateToken_1 = require("../middlewares/validateToken");
const router = (0, express_1.Router)();
router.get('/user', user_controllers_1.User.findAll);
router.post('/user', user_controllers_1.User.createUser);
router.put('/user/:id', user_controllers_1.User.updateUser);
router.delete('/user/:id', user_controllers_1.User.deleteUser);
router.post('/login', user_controllers_1.User.login);
router.post('/logout', user_controllers_1.User.logout);
router.get('/profile', validateToken_1.authRequired, user_controllers_1.User.profile);
exports.default = router;
