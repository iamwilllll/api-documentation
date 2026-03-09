import { AppError } from '../../errors/appError.js';
import { SectionModel } from '../../models/index.js';
import { ApiResponse } from '../../helpers/apiResponse.js';
export async function updateSectionController(req, res, next) {
    try {
        const { sectionId } = req.params;
        const { sectionName, sectionDescription } = req.body;
        if (!sectionId)
            throw new AppError('Section ID is required', 400, 'INVALID_INPUT');
        const updatedSection = await SectionModel.findByIdAndUpdate(sectionId, { sectionName, sectionDescription }, { new: true, runValidators: true });
        if (!updatedSection)
            throw new AppError('Section not found', 404, 'SECTION_NOT_FOUND');
        return ApiResponse.success(res, 200, 'Section updated successfully', { section: updatedSection.toObject() });
    }
    catch (err) {
        next(err);
    }
}
//# sourceMappingURL=updateSection.controller.js.map