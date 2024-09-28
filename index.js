const puppeteer = require('puppeteer');

/**
* Takes a screenshot of the specified URL with the given options.
* @param {string} url - The URL of the webpage to capture.
* @param {string} outputPath - The file path to save the screenshot.
* @param {object} options - Additional options for the screenshot.
* @param {string} [options.type='png'] - The image format. Can be either 'jpeg' or 'png'.
* @param {number} [options.quality] - The quality of the image, between 0-100. Not applicable to PNG images.
* @param {boolean} [options.fullPage=false] - When true, takes a screenshot of the full scrollable page.
* @param {object} [options.clip] - An object specifying clipping region of the page. Should have properties x, y, width, and height (all in pixels).
* @param {boolean} [options.omitBackground=false] - Hides default white background and allows capturing screenshots with transparency.
* @param {string} [options.encoding='binary'] - The encoding of the image. Can be either 'base64' or 'binary'.
* @param {boolean} [options.captureBeyondViewport=true] - When true, captures screenshot beyond the viewport.
* @param {boolean} [options.fromSurface=true] - When true, captures the screenshot from the surface, rather than the view.
* @param {number} [options.timeout=30000] - Maximum time in milliseconds to wait for the page to load.
*/
async function sakshshot(url, outputPath, options = {}) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2', timeout: options.timeout || 30000 }); // Wait until the network is idle
    await page.waitForTimeout(5000); // Wait for an additional 5 seconds
    await page.screenshot({
        path: outputPath,
        type: options.type || 'png',
        quality: options.quality,
        fullPage: options.fullPage || false,
        clip: options.clip,
        omitBackground: options.omitBackground || false,
        encoding: options.encoding || 'binary',
        captureBeyondViewport: options.captureBeyondViewport || true,
        fromSurface: options.fromSurface || true
    });
    await browser.close();
}

module.exports = sakshshot;