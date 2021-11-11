import { Router } from 'express';
import * as userController from '../database/controllers/user.controller';
import { auth } from '../middlewares/auth';

const userRouter = Router();

userRouter.post('/register', userController.register);
userRouter.post('/login', userController.login);
userRouter.get('/logout', userController.logout);
userRouter.get('/me', auth, userController.refreshMe);
userRouter.get('/confirm', userController.confirmAccount);
userRouter.get('/generate-password', userController.generateResetPasswordLink);
userRouter.post('/reset-password', userController.resetPassword);

export default userRouter;