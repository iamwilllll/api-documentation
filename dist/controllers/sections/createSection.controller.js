import { AppError } from '../../errors/appError.js';
import { SectionModel } from '../../models/index.js';
import { ApiResponse } from '../../helpers/apiResponse.js';
export async function createSectionController(req, res, next) {
    try {
        const { sectionName, sectionDescription } = req.body;
        if (!sectionName || !sectionDescription)
            throw new AppError('Section name and description are required', 400, 'INVALID_INPUT');
        const newSection = await SectionModel.create({ sectionName, sectionDescription });
        return ApiResponse.success(res, 201, 'Section created successfully', { section: newSection.toObject() });
    }
    catch (err) {
        next(err);
    }
}
//# sourceMappingURL=createSection.controller.js.map