import mongoose, { Schema } from 'mongoose';

type SectionT = {
    sectionName: string;
    sectionDescription: string;
    endpoints: mongoose.Types.ObjectId[];
};

const SectionSchema = new Schema<SectionT>(
    {
        sectionName: { type: String, required: true },
        sectionDescription: { type: String, required: true },
        endpoints: { type: [Schema.Types.ObjectId], required: true, default: [], ref: 'Endpoint' },
    },
    { timestamps: true, versionKey: false }
);

export const SectionModel = mongoose.model<SectionT>('Section', SectionSchema);
