import express from 'express';
import aichamcongController from './controller';

const aichamcongRouter = express.Router();

aichamcongRouter.get('/', aichamcongController.getAll);
aichamcongRouter.get('/query', aichamcongController.getAllUseQuery);
aichamcongRouter.get('/find', aichamcongController.findOne);

export default aichamcongRouter;
