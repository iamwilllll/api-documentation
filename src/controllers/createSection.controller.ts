import type { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/appError.js';
import { SectionModel } from '../models/index.js';

// sectionName sectionDescription
export async function createSectionController(req: Request, res: Response, next: NextFunction) {
    try {
        const { sectionName, sectionDescription } = req.body;
        if (!sectionName) throw new AppError('Section name is required', 400, 'INVALID_INPUT');

        const newSection = await SectionModel.create({ sectionName, sectionDescription });

        console.log(newSection);
    } catch (err) {
        next(err);
    }
}
