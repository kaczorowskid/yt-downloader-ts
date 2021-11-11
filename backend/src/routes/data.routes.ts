import { Router } from 'express';
import * as dataController from '../database/controllers/data.controller'
import { auth } from '../middlewares/auth';

const dataRouter = Router();

dataRouter.get('/get-all', auth, dataController.getAllData);
dataRouter.delete('/delete', auth, dataController.deleteItem);
dataRouter.post('/add', auth, dataController.addItem)

export default dataRouter;