import {convertToPdfService} from "../services/convertToPdfService.js";

export const convertUrlToPdfController = async (url) => {
    let file = { url };
    return await convertToPdfService(file)
}