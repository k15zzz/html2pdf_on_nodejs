import puppeteer from 'puppeteer';
import hb from 'handlebars';
import inlineCss from 'inline-css';

export const generatePdf = async (file, options) => {
    let args = [
        '--no-sandbox',
        '--disable-setuid-sandbox'
    ];
    if (options.args) {
        args = options.args;
        delete options.args;
    }

    const browser = await puppeteer.launch({
        headless: true,
        args: args
    });
    const page = await browser.newPage();

    if (file.content) {
        let data = await inlineCss(file.content, {url: "/"});
        console.log("Compiling the template with handlebars")
        const template = hb.compile(data, {strict: true});
        await page.setContent(template(data), {
            waitUntil: 'networkidle0'
        });
    } else {
        await page.goto(file.url, {
            waitUntil: ['load', 'networkidle0']
        });
    }

    return page.pdf(options)
        .then(async (data) => {
            await page.close();
            await browser.close();
            return Buffer.from(Object.values(data));
        })
        .catch((e) => console.error(e.message))
}