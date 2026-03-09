import { AppError } from '../../errors/appError.js';
import { SectionModel } from '../../models/index.js';
import { ApiResponse } from '../../helpers/apiResponse.js';
export async function getSectionByIdController(req, res, next) {
    try {
        const { sectionId } = req.params;
        if (!sectionId)
            throw new AppError('Section ID is required', 400, 'INVALID_INPUT');
        const updatedSection = await SectionModel.findById(sectionId);
        if (!updatedSection)
            throw new AppError('Section not found', 404, 'SECTION_NOT_FOUND');
        return ApiResponse.success(res, 200, 'Section retrieved successfully', { section: updatedSection.toObject() });
    }
    catch (err) {
        next(err);
    }
}
//# sourceMappingURL=getSectionById.controller.js.map