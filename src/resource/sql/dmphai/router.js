import express from 'express';
import dmphaiController from './controller';

const dmphaiRouter = express.Router();

dmphaiRouter.get('/', dmphaiController.getAll);
dmphaiRouter.get('/:id', dmphaiController.findOne);

export default dmphaiRouter;
