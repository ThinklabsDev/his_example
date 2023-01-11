import express from 'express';
import dmnhanvienController from './controller';

const dmnhanvienRouter = express.Router();

dmnhanvienRouter.get('/', dmnhanvienController.getAll);
dmnhanvienRouter.get('/query', dmnhanvienController.getAllUseQuery);
dmnhanvienRouter.get('/:id', dmnhanvienController.findOne);

export default dmnhanvienRouter;
