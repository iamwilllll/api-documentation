import type { Request, Response, NextFunction } from 'express';
import { AppError } from '../../errors/appError.js';
import { EndPointModel } from '../../models/index.js';
import { ApiResponse } from '../../helpers/apiResponse.js';

export async function getEndPointByIdController(req: Request, res: Response, next: NextFunction) {
    try {
        const { endpointId } = req.params;
        if (!endpointId) throw new AppError('Endpoint ID is required', 400, 'INVALID_INPUT');

        const updatedEndpoint = await EndPointModel.findById(endpointId);
        if (!updatedEndpoint) throw new AppError('Endpoint not found', 404, 'ENDPOINT_NOT_FOUND');

        return ApiResponse.success(res, 200, 'Endpoint retrieved successfully', { endpoint: updatedEndpoint.toObject() });
    } catch (err) {
        next(err);
    }
}
