"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_controllers_1 = require("../controllers/user.controllers");
var router = (0, express_1.Router)();
router.get('/user', user_controllers_1.user.findAll);
router.post('/user', user_controllers_1.user.createUser);
//router.put('/user/:id, ')
//router.delete('/user/:id, ')
//router.get('/user/:id, ')
exports.default = router;
