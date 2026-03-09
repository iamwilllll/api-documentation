import mongoose, { Schema } from 'mongoose';
const EndpointSchema = new Schema({
    method: { type: String, required: true, enum: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'] },
    URL: { type: String, required: true },
    description: { type: String, required: true },
    jsonSchema: { type: Object, required: false },
    section: { type: Schema.Types.ObjectId, ref: 'Section', required: true },
}, { timestamps: true, versionKey: false });
export const EndpointModel = mongoose.model('Endpoint', EndpointSchema);
//# sourceMappingURL=endPointModel.js.map