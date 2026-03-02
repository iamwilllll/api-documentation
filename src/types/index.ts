import type { RequestHandler } from 'express';
import type { Mongoose } from 'mongoose';

export type CSMConfig = {
    /*
     * Path where the CSM will be mounted.
     * E.g., '/api-docs'
     */
    mountPath: string;

    /*
     * Optional middleware to protect the documentation.
     * E.g., JWT authentication.
     */ protectWith?: RequestHandler;

    /*
     * Execution mode.
     * - development: allows creating/editing endpoints
     * - production: read-only
     */
    mode?: 'development' | 'production';

    /*
     * Title to be displayed in the UI.
     */
    title?: string;
};
