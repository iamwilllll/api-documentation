import { Router } from 'express';
import {
    createSectionController,
    updateSectionController,
    getAllSectionsController,
    getSectionByIdController,
} from '../controllers/index.js';
import { createSectionMiddleware, updateSectionMiddleware } from '../middlewares/index.js';

const appRouter: Router = Router();

appRouter.post('/sections', createSectionMiddleware, createSectionController);
appRouter.get('/sections', getAllSectionsController);
appRouter.get('/sections/:id', getSectionByIdController);
appRouter.patch('/sections/:id', updateSectionMiddleware, updateSectionController);

export default appRouter;
