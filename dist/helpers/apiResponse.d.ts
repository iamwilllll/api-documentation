import type { Response } from 'express';
export interface ApiResponseT<T = unknown> {
    success: boolean;
    message: string;
    data?: T;
    error?: {
        code: string;
        details?: unknown;
    };
}
export declare class ApiResponse {
    static success<T>(res: Response, statusCode: number, message: string, data?: T): Response<any, Record<string, any>>;
    static error(res: Response, statusCode: number, message: string, code: string, details?: unknown): Response<any, Record<string, any>>;
}
//# sourceMappingURL=apiResponse.d.ts.map