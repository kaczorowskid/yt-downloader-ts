import * as downloaderController from '../controllers/downloader.controller';
import { Router } from 'express';

const downloaderRouter = Router();

downloaderRouter.get('/get-info', downloaderController.getInfo);
downloaderRouter.get('/download-one', downloaderController.downloadOne);

export default downloaderRouter;
