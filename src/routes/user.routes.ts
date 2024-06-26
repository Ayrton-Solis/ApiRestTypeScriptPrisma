import { Router } from "express";
import { User } from "../controllers/user.controllers";
import { authRequired } from "../middlewares/validateToken";

const router = Router();


router.get('/user', User.findAll);
router.post('/user', User.createUser);
router.put('/user/:id', User.updateUser);
router.delete('/user/:id', User.deleteUser);
router.post('/login', User.login);
router.post('/logout', User.logout);
router.get('/profile', authRequired, User.profile);

export default router;
