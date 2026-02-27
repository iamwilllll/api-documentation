import { body } from 'express-validator';
import { handleInputErrors } from '../handleInputError.js';

export const createSectionMiddleware = [
    body('sectionName')
        .isString()
        .withMessage('Section name must be a string')
        .isLength({ min: 2, max: 100 })
        .withMessage('Section name must be between 2 and 100 characters long'),
    body('sectionDescription').optional().isString().withMessage('Section description must be a string'),
    handleInputErrors,
];
