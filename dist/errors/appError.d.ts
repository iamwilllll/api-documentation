export declare class AppError extends Error {
    statusCode: number;
    code: string;
    isOperational: boolean;
    details?: unknown;
    constructor(message: string, statusCode: number, code: string, details?: unknown);
}
//# sourceMappingURL=appError.d.ts.map