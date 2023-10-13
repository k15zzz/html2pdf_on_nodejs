import {body} from 'express-validator';

export const covertHtmlValidation = [
    body('html').notEmpty().withMessage('HTML is required').isString().withMessage('HTML must be a string')
];

export const covertUrlValidation = [
    body('url').notEmpty().withMessage('URL is required').isString().withMessage('URL must be a string')
];