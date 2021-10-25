import { Router } from 'express';
import * as dataController from '../database/controllers/data.controller'

const dataRouter = Router();

dataRouter.get('/get-all',  dataController.getAllData);
dataRouter.delete('/delete', dataController.deleteItem);
dataRouter.post('/add', dataController.addItem)

export default dataRouter;