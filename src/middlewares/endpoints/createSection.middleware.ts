import { body } from 'express-validator';
import { handleInputErrors } from '../handleInputError.js';

export const createSectionMiddleware = [
    body('sectionName')
        .notEmpty()
        .withMessage('Section name is required')
        .isString()
        .withMessage('Section name must be a string')
        .isLength({ min: 2, max: 100 })
        .withMessage('Section name must be between 2 and 100 characters long'),
    body('sectionDescription')
        .notEmpty()
        .withMessage('Section description is required')
        .isString()
        .withMessage('Section description must be a string')
        .isLength({ min: 5, max: 500 })
        .withMessage('Section description must be between 5 and 500 characters long'),
    handleInputErrors,
];
