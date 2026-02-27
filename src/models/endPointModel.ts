import mongoose, { Schema } from 'mongoose';

type EndPointT = {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    URL: string;
    description?: string;
    jsonSchema?: object;
};

const EndPointSchema = new Schema<EndPointT>(
    {
        method: { type: String, required: true, enum: ['GET', 'POST', 'PUT', 'DELETE'] },
        URL: { type: String, required: true },
        description: { type: String, required: true },
        jsonSchema: { type: Object, required: false },
    },
    { timestamps: true, versionKey: false }
);

export const EndPointModel = mongoose.model<EndPointT>('EndPoint', EndPointSchema);
