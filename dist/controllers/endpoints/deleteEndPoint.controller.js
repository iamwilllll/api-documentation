import { AppError } from '../../errors/appError.js';
import { EndpointModel } from '../../models/index.js';
import { ApiResponse } from '../../helpers/apiResponse.js';
export async function deleteEndpointController(req, res, next) {
    try {
        const endpoint = req.endpoint;
        if (!endpoint)
            throw new AppError('Endpoint not found in request', 404, 'ENDPOINT_NOT_FOUND');
        await EndpointModel.findByIdAndDelete(endpoint._id);
        return ApiResponse.success(res, 200, 'Endpoint deleted successfully', { endpoint });
    }
    catch (err) {
        next(err);
    }
}
//# sourceMappingURL=deleteEndPoint.controller.js.map