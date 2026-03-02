import express, { Router } from 'express';
import type { CSMConfig } from './types/index.js';
import appRouter from './routes/appRouter.js';

export function createCSM(config: CSMConfig): Router {
    const router = Router();
    const { protectWith, mode = 'development', title = 'API Documentation' } = config;

    router.use(express.json());

    if (protectWith) router.use(protectWith);
    if (mode === 'production') {
        router.use('/api', (req, res, next) => {
            if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(req.method)) {
                return res.status(403).json({
                    message: 'CSM is in production mode (read-only)',
                });
            }
            next();
        });
    }

    router.use((req, res, next) => {
        res.locals.csmTitle = title;
        next();
    });

    router.use('/api', appRouter);

    // ? serve static files for the documentation UI
    // router.use(express.static(pathToDist));

    return router;
}
