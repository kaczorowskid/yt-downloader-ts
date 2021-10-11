import { Router } from 'express';
import * as folderController from '../database/controllers/folder.controller';

const folderRouter = Router();

folderRouter.get('/get-all', folderController.getFolders);
folderRouter.delete('/delete', folderController.deleteFolder);
folderRouter.post('/add', folderController.addFolder)

export default folderRouter;