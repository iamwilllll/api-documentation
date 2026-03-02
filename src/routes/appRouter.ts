import { Router } from 'express';
import {
    createSectionController,
    updateSectionController,
    getAllSectionsController,
    getSectionByIdController,
    deleteSectionController,
    createEndPointController,
    updateEndPointController,
} from '../controllers/index.js';
import {
    createSectionMiddleware,
    updateSectionMiddleware,
    createEndPointMiddleware,
    updateEndPointMiddleware,
    errorMiddleware,
} from '../middlewares/index.js';

const appRouter: Router = Router();

appRouter.post('/sections', createSectionMiddleware, createSectionController);
appRouter.patch('/sections/:id', updateSectionMiddleware, updateSectionController);
appRouter.get('/sections', getAllSectionsController);
appRouter.get('/sections/:id', getSectionByIdController);
appRouter.delete('/sections/:id', deleteSectionController);

appRouter.post('/endpoints/:endpointId', createEndPointMiddleware, createEndPointController);
appRouter.patch('/endpoints/:endpointId', updateEndPointMiddleware, updateEndPointController, errorMiddleware);

export default appRouter;
