import { SectionModel } from '../../models/index.js';
import { ApiResponse } from '../../helpers/apiResponse.js';
export async function getAllSectionsController(req, res, next) {
    try {
        const sections = await SectionModel.find({}).populate('endpoints');
        return ApiResponse.success(res, 200, 'Sections retrieved successfully', { sections });
    }
    catch (err) {
        next(err);
    }
}
//# sourceMappingURL=getAllSections.controller.js.map