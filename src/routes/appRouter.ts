import { Router } from 'express';
import { createSectionController } from '../controllers/index.js';
import { errorMiddleware } from '../middlewares/errorMiddleware.js';

const appRouter: Router = Router();

appRouter.post('/sections', createSectionController, errorMiddleware);
