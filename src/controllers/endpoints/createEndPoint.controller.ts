import type { Request, Response, NextFunction } from 'express';
import { EndPointModel, SectionModel } from '../../models/index.js';
import { AppError } from '../../errors/appError.js';
import { ApiResponse } from '../../helpers/apiResponse.js';

export async function createEndPointController(req: Request, res: Response, next: NextFunction) {
    try {
        const { method, URL, description, jsonSchema } = req.body;
        const { endpointId } = req.params;

        if (!endpointId) throw new AppError('Endpoint ID is required', 400, 'INVALID_INPUT');
        if (!method || !URL) throw new AppError('Method and URL are required', 400, 'INVALID_INPUT');
        const sectionExists = await SectionModel.findById(endpointId);
        if (!sectionExists) throw new AppError('Section not found', 404, 'SECTION_NOT_FOUND');

        const newEndpoint = new EndPointModel({
            method,
            URL,
            description,
            jsonSchema,
            section: endpointId,
        });

        sectionExists.endPoints.push(newEndpoint._id);

        await Promise.all([newEndpoint.save(), sectionExists.save()]);

        return ApiResponse.success(res, 201, 'Endpoint documentation created successfully', { endpoint: newEndpoint.toObject() });
    } catch (err) {
        next(err);
    }
}
