import mongoose, { Schema } from 'mongoose';

type SectionT = {
    sectionName: string;
    sectionDescription: string;
    endPoints: string[];
};

const SectionSchema = new Schema<SectionT>(
    {
        sectionName: { type: String, required: true },
        sectionDescription: { type: String, required: true },
        endPoints: { type: [String], required: true, default: [] },
    },
    { timestamps: true, versionKey: false }
);

export const SectionModel = mongoose.model<SectionT>('Section', SectionSchema);
