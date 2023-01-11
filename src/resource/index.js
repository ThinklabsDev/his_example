import express from 'express';
import benhnhanRouter from './mongodb/benhan/router';
import aichamcongRouter from './sql/aichamcong/router';
import dmnhanvienRouter from './sql/dmnhanvien/router';
import dmphaiRouter from './sql/dmphai/router';

const restRouter = express.Router();

restRouter.use('/benhnhan', benhnhanRouter);
restRouter.use('/aichamcong', aichamcongRouter);
restRouter.use('/dmnhanvien', dmnhanvienRouter);
restRouter.use('/dmphai', dmphaiRouter);

export default restRouter;
