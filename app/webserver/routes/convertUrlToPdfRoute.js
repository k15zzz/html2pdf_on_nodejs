import {validationRes} from "../server.js";
import {convertUrlToPdfController} from "../../controllers/convertUrlToPdfController.js";

export const convertUrlToPdfRoute = async (req, res) => {
    let {url} = validationRes(req, res);
    const pdfBuffer = await convertUrlToPdfController(url);
    res.send(pdfBuffer);
}