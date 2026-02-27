import { Database } from './config/db.js';
import { Server } from './config/server.js';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { env } from './config/index.js';
import cors, { type CorsOptions } from 'cors';
import appRouter from './routes/appRouter.js';

(async () => {
    await Database.connect();
    await main();
})();

async function main() {
    // * server initialization
    const server = Server.init();

    // * proxy
    server.set('trust proxy', 1);

    //* cors configuration
    const allowedOrigins: string[] = [env.baseUrl, 'http://localhost:5173', 'http://localhost:3000'];
    const corsOptions: CorsOptions = {
        origin: (origin, callback) => {
            if (!origin) return callback(null, true);
            if (env.isDev) return callback(null, true);
            if (allowedOrigins.includes(origin)) return callback(null, true);

            return callback(new Error('Not allowed by CORS'));
        },

        credentials: true,
        optionsSuccessStatus: 200,
    };

    //* middlewares
    server.use(express.json());
    server.use(helmet());
    server.use(morgan('dev'));
    server.use(cors(corsOptions));

    //* routes
    server.use('/api', appRouter);
}
