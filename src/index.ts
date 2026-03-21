import express, { Router } from 'express';
import type { CSMConfig } from './types/index.js';
import appRouter from './routes/appRouter.js';
import path from 'node:path';
import { errorMiddleware } from './middlewares/errorMiddleware.js';
import { ApiResponse } from './helpers/apiResponse.js';
import { fileURLToPath } from 'node:url';

function createCSM(config: CSMConfig): Router {
    const router = Router();
    const { protectWith, mode = 'development', routePath = 'documentation' } = config;

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const pathToDist = path.join(__dirname, 'static');

    router.use(express.json());

    if (protectWith) router.use(protectWith);

    if (mode === 'production') {
        router.use(`/${routePath}`, (req, res, next) => {
            if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(req.method)) {
                return res.status(403).json({
                    message: 'CSM is in production mode (read-only)',
                });
            }
            next();
        });
    }

    router.use(`/${routePath}`, appRouter);

    router.use(`/${routePath}`, express.static(pathToDist));

    router.get(`/${routePath}`, (req, res) => {
        res.sendFile(path.join(pathToDist, 'index.html'));
    });

    router.get(`/configuration_documentation_csm`, (req, res) =>
        ApiResponse.success(res, 200, 'Mode retrieved successfully', { mode, routePath })
    );

    router.use(errorMiddleware);

    return router;
}

export default createCSM;
