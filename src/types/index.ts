import type { RequestHandler } from 'express';

export type CSMConfig = {
    /*
     * Mount path for the documentation UI and API routes.
     * E.g., '/docs' will serve the UI at '/docs' and API routes under '/docs/api'.
     */
    routePath?: string;

    /*
     * Optional middleware to protect the documentation.
     * E.g., JWT authentication.
     */
    protectWith?: RequestHandler;

    /*
     * Execution mode.
     * - development: allows creating/editing endpoints
     * - production: read-only
     */
    mode?: 'development' | 'production';
};
