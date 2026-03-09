import express, { Router } from 'express';
import appRouter from './routes/appRouter.js';
import path from 'node:path';
import { errorMiddleware } from './middlewares/errorMiddleware.js';
import { ApiResponse } from './helpers/apiResponse.js';
function createCSM(config) {
    const router = Router();
    const { protectWith, mode = 'development', routePath = 'documentation' } = config;
    const __dirname = import.meta.dirname;
    const pathToDist = path.join(__dirname, './public');
    router.use(express.json());
    if (protectWith)
        router.use(protectWith);
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
    router.use(errorMiddleware);
    router.use(express.static(pathToDist));
    router.get(`/${routePath}`, (req, res) => res.sendFile(path.join(pathToDist, 'index.html')));
    router.get(`/configuration_documentation_csm`, (req, res) => ApiResponse.success(res, 200, 'Mode retrieved successfully', { mode, routePath }));
    return router;
}
export default createCSM;
//# sourceMappingURL=index.js.map