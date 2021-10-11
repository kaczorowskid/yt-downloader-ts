import * as downloaderController from '../database/controllers/downloader.controller'
import { Router } from 'express';

const downloaderRouter = Router();

downloaderRouter.get('/get-info', downloaderController.getInfo);
downloaderRouter.get('/download-one', downloaderController.downloadOne)
downloaderRouter.get('/download-zip', downloaderController.getZip)

export default downloaderRouter;
