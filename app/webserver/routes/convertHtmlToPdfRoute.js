import {convertHtmlToPdfController} from "../../controllers/convertHtmlToPdfController.js";
import {validationRes} from "../server.js";
// import fs from "fs";

export const convertHtmlToPdfRoute = async (req, res) => {
    let {html} = validationRes(req, res);
    const pdfBuffer = await convertHtmlToPdfController(html);
    // fs.writeFile("fileName.pdf", pdfBuffer, (err) => {
    //     // если произошла ошибка, выбрасываем исключение
    //     if (err) throw err;
    //     // выводим сообщение об успешной записи
    //     console.log('Данные сохранены в файл');
    // });
    res.send(pdfBuffer);
}