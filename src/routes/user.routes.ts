import { Router } from "express";
import { User } from "../controllers/user.controllers";
const router = Router();


router.get('/user', User.findAll);
router.post('/user', User.createUser);
router.put('/user/:id', User.updateUser);
router.delete('/user/:id', User.deleteUser);
router.get('/user/:id', User.findById);

export default router;
