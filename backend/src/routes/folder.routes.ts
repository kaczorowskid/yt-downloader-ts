import { Router } from 'express';
import * as folderController from '../database/controllers/folder.controller';
import { auth } from '../middlewares/auth';

const folderRouter = Router();

folderRouter.get('/get-all', auth, folderController.getFolders);
folderRouter.delete('/delete', auth, folderController.deleteFolder);
folderRouter.post('/add', auth, folderController.addFolder)

export default folderRouter;