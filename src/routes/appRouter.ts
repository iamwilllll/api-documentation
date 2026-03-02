import { Router } from 'express';
import {
    createSectionController,
    updateSectionController,
    getAllSectionsController,
    getSectionByIdController,
    deleteSectionController,
    createEndPointController,
    updateEndPointController,
    getAllEndPointsController,
    getEndPointByIdController,
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
appRouter.patch('/sections/:sectionId', updateSectionMiddleware, updateSectionController);
appRouter.get('/sections', getAllSectionsController);
appRouter.get('/sections/:sectionId', getSectionByIdController);
appRouter.delete('/sections/:sectionId', deleteSectionController);

appRouter.post('/endpoints/:endpointId', createEndPointMiddleware, createEndPointController);
appRouter.patch('/endpoints/:endpointId', updateEndPointMiddleware, updateEndPointController, errorMiddleware);
appRouter.get('/endpoints/:sectionId', getAllEndPointsController);
appRouter.get('/endpoints/:sectionId/:endpointId', getEndPointByIdController);

export default appRouter;
