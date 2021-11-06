import { Router } from 'express';
import * as userController from '../database/controllers/user.controller';

const userRouter = Router();

userRouter.post('/register', userController.register);
userRouter.post('/login', userController.login);
userRouter.get('/logout', userController.logout);
userRouter.get('/me', userController.refreshMe);
userRouter.get('/confirm', userController.confirmAccount);

export default userRouter;