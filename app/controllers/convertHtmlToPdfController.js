import {convertToPdfService} from "../services/convertToPdfService.js";

export const convertHtmlToPdfController = async (content) => {
    let file = { content };
    return await convertToPdfService(file);
}