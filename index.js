const puppeteer = require('puppeteer');

function giveMePDF() {
    puppeteer.launch()
        .then((browser) => {
            browser.newPage()
                .then((page) => {
                    page.goto('https://local.gogrow.com/dashboard/27450?shareToken=69c8d1527837a726a909014dea6dccf2&pdf=true', {waitUntil: 'networkidle'})
                        .then(() => {
                            page.pdf({path: 'page.pdf', format: 'A4'})
                                .then((hello) => {
                                    console.log(hello);
                                    browser.close();
                                })
                        })
                })
        })
}

giveMePDF();

/*(async() => {

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto('https://www.chromestatus.com', {waitUntil: 'networkidle'});
await page.pdf({path: 'page.pdf', format: 'A4'});

browser.close();
})();*/
