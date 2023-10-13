import {convertHtmlToPdfRoute} from "./routes/convertHtmlToPdfRoute.js";
import {convertUrlToPdfRoute} from "./routes/convertUrlToPdfRoute.js";
import {covertHtmlValidation, covertUrlValidation} from "./validations.js";
import {defaultRoute} from "./routes/defaultRoute.js";

export const route = (app) => {
    app.post('/api/v1/convert/html', covertHtmlValidation, async (req, res) => {
        await convertHtmlToPdfRoute(req, res)
    });
    app.post('/api/v1/convert/url', covertUrlValidation, async (req, res) => {
        await convertUrlToPdfRoute(req, res)
    });
    app.get('/', async (req, res) => {
        await defaultRoute(req, res)
    });
}