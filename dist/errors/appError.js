export class AppError extends Error {
    statusCode;
    code;
    isOperational;
    details;
    constructor(message, statusCode, code, details) {
        super(message);
        this.statusCode = statusCode;
        this.code = code;
        this.isOperational = true;
        this.details = details;
        Error.captureStackTrace(this, this.constructor);
    }
}
//# sourceMappingURL=appError.js.map