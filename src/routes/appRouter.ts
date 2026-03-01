import { Router } from 'express';
import { createSectionController, updateSectionController } from '../controllers/index.js';
import { createSectionMiddleware, updateSectionMiddleware } from '../middlewares/index.js';

const appRouter: Router = Router();

appRouter.post('/sections', createSectionMiddleware, createSectionController);
appRouter.patch('/sections/:id', updateSectionMiddleware, updateSectionController);

export default appRouter;
