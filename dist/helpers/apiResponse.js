export class ApiResponse {
    static success(res, statusCode, message, data) {
        const response = {
            success: true,
            message,
            ...(data ?? {}),
        };
        return res.status(statusCode).json(response);
    }
    static error(res, statusCode, message, code, details) {
        const response = {
            success: false,
            message,
            error: {
                code,
                details,
            },
        };
        return res.status(statusCode).json(response);
    }
}
//# sourceMappingURL=apiResponse.js.map