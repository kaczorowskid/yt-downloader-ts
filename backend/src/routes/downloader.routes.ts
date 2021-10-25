import * as downloaderController from '../database/controllers/downloader.controller'
import { Router } from 'express';

const downloaderRouter = Router();

downloaderRouter.get('/get-info', downloaderController.getInfo);
downloaderRouter.get('/download-one', downloaderController.downloadOne);
downloaderRouter.get('/start-count', downloaderController.startCount);
downloaderRouter.get('/percent', downloaderController.percent);

export default downloaderRouter;
