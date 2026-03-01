import { Router } from 'express';
import {
    createSectionController,
    updateSectionController,
    getAllSectionsController,
    getSectionByIdController,
    deleteSectionController,
    createEndPointController,
} from '../controllers/index.js';
import { createSectionMiddleware, updateSectionMiddleware, createEndPointMiddleware } from '../middlewares/index.js';

const appRouter: Router = Router();

appRouter.post('/sections', createSectionMiddleware, createSectionController);
appRouter.patch('/sections/:id', updateSectionMiddleware, updateSectionController);
appRouter.get('/sections', getAllSectionsController);
appRouter.get('/sections/:id', getSectionByIdController);
appRouter.delete('/sections/:id', deleteSectionController);

appRouter.post('/endPoint/', createEndPointMiddleware, createEndPointController);

export default appRouter;
