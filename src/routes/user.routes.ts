import { Router } from "express";
import { user } from "../controllers/user.controllers";
const router = Router();


router.get('/user', user.findAll);
router.post('/user', user.createUser);
//router.put('/user/:id, ')
//router.delete('/user/:id, ')
//router.get('/user/:id, ')

export default router;
