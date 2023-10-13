import {convertHtmlToPdfController} from "../../controllers/convertHtmlToPdfController.js";
import {validationRes} from "../server.js";

export const convertHtmlToPdfRoute = async (req, res) => {
    let {html} = validationRes(req, res);
    const pdfBuffer = await convertHtmlToPdfController(html);
    res.send(pdfBuffer);
}