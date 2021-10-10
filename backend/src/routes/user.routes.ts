import { Router } from 'express';
import * as userController from '../database/controllers/user.controller';

const userRouter = Router();

userRouter.post('/register', userController.register);
userRouter.post('/login', userController.login);
userRouter.get('/logout', userController.logout);
userRouter.get('/me', userController.refreshMe);

export default userRouter;