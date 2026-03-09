import mongoose from 'mongoose';
type EndpointT = {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    URL: string;
    description?: string;
    jsonSchema?: object;
    section: mongoose.Types.ObjectId;
};
export declare const EndpointModel: mongoose.Model<EndpointT, {}, {}, {}, mongoose.Document<unknown, {}, EndpointT, {}, mongoose.DefaultSchemaOptions> & EndpointT & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}, any, EndpointT>;
export {};
//# sourceMappingURL=endPointModel.d.ts.map