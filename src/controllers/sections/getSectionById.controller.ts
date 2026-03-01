import type { Request, Response, NextFunction } from 'express';
import { AppError } from '../../errors/appError.js';
import { SectionModel } from '../../models/index.js';
import { ApiResponse } from '../../helpers/apiResponse.js';

export async function getSectionByIdController(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;
        if (!id) throw new AppError('Section ID is required', 400, 'INVALID_INPUT');

        const updatedSection = await SectionModel.findById(id);
        if (!updatedSection) throw new AppError('Section not found', 404, 'SECTION_NOT_FOUND');

        return ApiResponse.success(res, 200, 'Section retrieved successfully', { section: updatedSection.toObject() });
    } catch (err) {
        next(err);
    }
}
