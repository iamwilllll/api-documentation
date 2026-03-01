import { Router } from 'express';
import {
    createSectionController,
    updateSectionController,
    getAllSectionsController,
    getSectionByIdController,
    deleteSectionController,
} from '../controllers/index.js';
import { createSectionMiddleware, updateSectionMiddleware } from '../middlewares/index.js';

const appRouter: Router = Router();

appRouter.post('/sections', createSectionMiddleware, createSectionController);
appRouter.patch('/sections/:id', updateSectionMiddleware, updateSectionController);
appRouter.get('/sections', getAllSectionsController);
appRouter.get('/sections/:id', getSectionByIdController);
appRouter.delete('/sections/:id', deleteSectionController);

export default appRouter;
