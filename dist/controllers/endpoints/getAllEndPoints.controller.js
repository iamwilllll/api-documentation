import { EndpointModel } from '../../models/index.js';
import { ApiResponse } from '../../helpers/apiResponse.js';
export async function getAllEndpointsController(req, res, next) {
    try {
        const endpoints = await EndpointModel.find({});
        return ApiResponse.success(res, 200, 'Endpoints retrieved successfully', { endpoints });
    }
    catch (err) {
        next(err);
    }
}
//# sourceMappingURL=getAllEndPoints.controller.js.map