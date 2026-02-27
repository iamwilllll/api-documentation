import express, { type Express } from 'express';
import colors from 'colors';
import { env } from './env.js';
import { AppError } from '../errors/index.js';

export class Server {
    static init(): Express {
        const server = express();
        const port = env.PORT;

        if (!port) throw new AppError('Port is not defined in environment variables', 500, 'PORT_NOT_DEFINED');

        server.listen(port, () => {
            console.log(colors.bold.green(`Server running on port ${port}`));
        });

        return server;
    }
}
