// controllers/endpoint.controller.ts

import type { Request, Response, NextFunction } from 'express';
import { EndPointModel } from '../../models/index.js';
import { AppError } from '../../errors/appError.js';
import { ApiResponse } from '../../helpers/apiResponse.js';

export async function createEndPointController(req: Request, res: Response, next: NextFunction) {
    try {
        const { method, URL, description, jsonSchema } = req.body;

        if (!method || !URL) throw new AppError('Method and URL are required', 400, 'INVALID_INPUT');

        const newEndpoint = await EndPointModel.create({
            method,
            URL,
            description,
            jsonSchema,
        });

        return ApiResponse.success(res, 201, 'Endpoint documentation created successfully', { endpoint: newEndpoint.toObject() });
    } catch (err) {
        next(err);
    }
}
