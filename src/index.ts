import express, { Router } from 'express';
import type { CSMConfig } from './types/index.js';
import appRouter from './routes/appRouter.js';
import path from 'node:path';
import { errorMiddleware } from './middlewares/errorMiddleware.js';

function createCSM(config: CSMConfig): Router {
    const router = Router();

    // * Set default values and destructure config
    const { protectWith, mode = 'development', routePath = '/documentation', title = 'API Documentation' } = config;

    // * Middleware setup
    router.use(express.json());

    // * Protect routes if middleware is provided
    if (protectWith) router.use(protectWith);

    // * Restrict write operations in production mode
    if (mode === 'production') {
        router.use(routePath, (req, res, next) => {
            if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(req.method)) {
                return res.status(403).json({
                    message: 'CSM is in production mode (read-only)',
                });
            }
            next();
        });
    }

    // * Set title in response locals for use in controllers
    router.use((req, res, next) => {
        res.locals.csmTitle = title;
        next();
    });

    // * Use the app router for API routes
    router.use(routePath, appRouter);

    // * Global error handling middleware
    router.use(errorMiddleware);

    // * Serve static files for the documentation UI
    const __dirname = import.meta.dirname;
    const pathToDist = path.join(__dirname, './public');

    router.get('/', (req, res) => {
        res.sendFile(path.join(pathToDist, 'index.html'));
    });

    return router;
}

export default createCSM;
