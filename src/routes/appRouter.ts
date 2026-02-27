import { Router } from 'express';
import { createSectionController } from '../controllers/index.js';
import { errorMiddleware } from '../middlewares/errorMiddleware.js';
import { createSectionMiddleware } from '../middlewares/endpoints/createSection.middleware.js';

const appRouter: Router = Router();

appRouter.post('/sections', createSectionMiddleware, createSectionController, errorMiddleware);

export default appRouter;
