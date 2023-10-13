import {convertToPdfService} from "../services/convertToPdfService.js";

export const convertHtmlToPdfController = async (content) => {
    let file = { content: "<h1>Sosi</h1>" };
    return await convertToPdfService(file);
}