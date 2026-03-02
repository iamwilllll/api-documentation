import type { Request, Response, NextFunction } from 'express';
import { EndPointModel } from '../../models/index.js';
import { ApiResponse } from '../../helpers/apiResponse.js';

export async function getAllEndPointsController(req: Request, res: Response, next: NextFunction) {
    try {
        const endPoints = await EndPointModel.find({});
        return ApiResponse.success(res, 200, 'Endpoints retrieved successfully', { endPoints });
    } catch (err) {
        next(err);
    }
}
