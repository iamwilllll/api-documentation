import mongoose, { Schema } from 'mongoose';

type SectionT = {
    sectionName: string;
    sectionDescription: string;
    endPoints: mongoose.Types.ObjectId[];
};

const SectionSchema = new Schema<SectionT>(
    {
        sectionName: { type: String, required: true },
        sectionDescription: { type: String, required: true },
        endPoints: { type: [Schema.Types.ObjectId], required: true, default: [] },
    },
    { timestamps: true, versionKey: false }
);

export const SectionModel = mongoose.model<SectionT>('Section', SectionSchema);
