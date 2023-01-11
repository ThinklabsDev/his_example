import express from 'express';
import benhnhanController from './controller';

const benhnhanRouter = express.Router();

benhnhanRouter.get('/', benhnhanController.getAll);

export default benhnhanRouter;
