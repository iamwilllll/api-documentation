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
    deleteEndPointController,
} from '../controllers/index.js';
import {
    createSectionMiddleware,
    updateSectionMiddleware,
    createEndPointMiddleware,
    updateEndPointMiddleware,
    validateSectionAndEndpoint,
} from '../middlewares/index.js';

const appRouter: Router = Router();

appRouter.post('/sections', createSectionMiddleware, createSectionController);
appRouter.patch('/sections/:sectionId', updateSectionMiddleware, updateSectionController);
appRouter.get('/sections', getAllSectionsController);
appRouter.get('/sections/:sectionId', getSectionByIdController);
appRouter.delete('/sections/:sectionId', deleteSectionController);

appRouter.post('/sections/:sectionId/endpoints', createEndPointMiddleware, createEndPointController);
appRouter.get('/sections/:sectionId/endpoints', getAllEndPointsController);
appRouter.get('/sections/:sectionId/endpoints/:endpointId', validateSectionAndEndpoint, getEndPointByIdController);
appRouter.patch(
    '/sections/:sectionId/endpoints/:endpointId',
    validateSectionAndEndpoint,
    updateEndPointMiddleware,
    updateEndPointController
);
appRouter.delete('/sections/:sectionId/endpoints/:endpointId', validateSectionAndEndpoint, deleteEndPointController);

export default appRouter;
