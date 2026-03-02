import type { Request, Response, NextFunction } from 'express';
import { EndPointModel } from '../../models/index.js';
import { AppError } from '../../errors/appError.js';
import { ApiResponse } from '../../helpers/apiResponse.js';

export async function updateEndPointController(req: Request, res: Response, next: NextFunction) {
    try {
        const { endpointId } = req.params;
        const { method, URL, description, jsonSchema } = req.body;

        if (!endpointId) throw new AppError('Endpoint ID is required', 400, 'INVALID_INPUT');

        const updatedEndpoint = await EndPointModel.findByIdAndUpdate(
            endpointId,
            { method, URL, description, jsonSchema },
            { new: true, runValidators: true }
        );

        if (!updatedEndpoint) throw new AppError('Endpoint not found', 404, 'ENDPOINT_NOT_FOUND');

        return ApiResponse.success(res, 200, 'Endpoint updated successfully', { endpoint: updatedEndpoint.toObject() });
    } catch (err) {
        next(err);
    }
}
