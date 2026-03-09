import type { RequestHandler } from 'express';
export type CSMConfig = {
    routePath?: string;
    protectWith?: RequestHandler;
    mode?: 'development' | 'production';
};
//# sourceMappingURL=index.d.ts.map