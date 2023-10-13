import {optionsConvert} from "../config/config.js";
import {generatePdf} from "./../pkg/generatePdf/generatePdf.js";

export const convertToPdfService = async (file) => {
    let pdfBuffer = null;

    try {
        pdfBuffer = await generatePdf(file, optionsConvert)
    } catch (e) {
        console.error(e.message)
    }

    return pdfBuffer;
}