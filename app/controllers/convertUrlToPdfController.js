import {convertToPdfService} from "../services/convertToPdfService.js";

export const convertUrlToPdfController = async (url) => {
    let file = { url: "https://ya.ru/" };
    return await convertToPdfService(file)
}