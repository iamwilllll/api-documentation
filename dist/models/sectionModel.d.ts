import mongoose from 'mongoose';
type SectionT = {
    sectionName: string;
    sectionDescription: string;
    endpoints: mongoose.Types.ObjectId[];
};
export declare const SectionModel: mongoose.Model<SectionT, {}, {}, {}, mongoose.Document<unknown, {}, SectionT, {}, mongoose.DefaultSchemaOptions> & SectionT & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, SectionT>;
export {};
//# sourceMappingURL=sectionModel.d.ts.map