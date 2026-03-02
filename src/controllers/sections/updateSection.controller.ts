import type { Request, Response, NextFunction } from 'express';
import { AppError } from '../../errors/appError.js';
import { SectionModel } from '../../models/index.js';
import { ApiResponse } from '../../helpers/apiResponse.js';

export async function updateSectionController(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;
        const { sectionName, sectionDescription } = req.body;

        if (!id) throw new AppError('Section ID is required', 400, 'INVALID_INPUT');

        const updatedSection = await SectionModel.findByIdAndUpdate(
            id,
            { sectionName, sectionDescription },
            { new: true, runValidators: true }
        );

        if (!updatedSection) throw new AppError('Section not found', 404, 'SECTION_NOT_FOUND');

        return ApiResponse.success(res, 200, 'Section updated successfully', { section: updatedSection.toObject() });
    } catch (err) {
        next(err);
    }
}
