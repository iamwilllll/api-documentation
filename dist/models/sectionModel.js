import mongoose, { Schema } from 'mongoose';
const SectionSchema = new Schema({
    sectionName: { type: String, required: true },
    sectionDescription: { type: String, required: true },
    endpoints: { type: [Schema.Types.ObjectId], required: true, default: [], ref: 'Endpoint' },
}, { timestamps: true, versionKey: false });
export const SectionModel = mongoose.model('Section', SectionSchema);
//# sourceMappingURL=sectionModel.js.map