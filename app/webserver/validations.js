import {check} from 'express-validator';

export const covertHtmlValidation = [
    check('html').notEmpty().withMessage('HTML is required').isString().withMessage('HTML must be a string')
];

export const covertUrlValidation = [
    check('url').notEmpty().withMessage('URL is required').isString().withMessage('URL must be a string')
];