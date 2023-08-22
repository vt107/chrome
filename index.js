const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        args: ['--disable-setuid-sandbox', '--no-sandbox']
    });

    const page = await browser.newPage();

    await page.setViewport({
        width: 1366,
        height: 768,
        deviceScaleFactor: 1,
    });

    await page.setDefaultNavigationTimeout(0);

    await page.goto('https://www.google.com/', { waitUntil: 'networkidle0' });
})();