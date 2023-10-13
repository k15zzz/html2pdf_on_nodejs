import express from "express";
import bodyParser from "body-parser";
import {validationResult} from "express-validator";
import {bodyParserJson, bodyParserUrlencoded} from "../config/config.js";

export const initExpress = () => {
    const app = express();

    app.use(bodyParser.json(bodyParserJson));
    app.use(bodyParser.urlencoded(bodyParserUrlencoded));

    return app;
}

export const validationRes = (req, res) => {
    let query = null;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    } else {
        query = req.body
    }

    return query;
}