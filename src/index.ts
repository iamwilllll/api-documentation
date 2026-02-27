import { Database } from './config/db.js';
import { Server } from './config/server.js';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

(async () => {
    await Database.connect();
    await main();
})();

async function main() {
    const server = Server.init();

    // * middlewares
    server.use(express.json());
    server.use(helmet());
    server.use(morgan('dev'));
}
