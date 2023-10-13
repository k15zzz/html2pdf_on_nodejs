import {validationRes} from "../server.js";
import {convertUrlToPdfController} from "../../controllers/convertUrlToPdfController.js";
// import fs from "fs";

export const convertUrlToPdfRoute = async (req, res) => {
    let {url} = validationRes(req, res);
    const pdfBuffer = await convertUrlToPdfController(url);
    // fs.writeFile("fileName.pdf", pdfBuffer, (err) => {
    //     // если произошла ошибка, выбрасываем исключение
    //     if (err) throw err;
    //     // выводим сообщение об успешной записи
    //     console.log('Данные сохранены в файл');
    // });
    res.send(pdfBuffer);
}