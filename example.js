const sakshshot = require('sakshshot');
const path = require('path');

(async () => {
    try {
        const url = 'https://sakshstore.com';
        const outputPath = path.join(__dirname, 'public', 'screenshot.png');
        const options = {
            type: 'jpeg',
            quality: 80,
            fullPage: true,
            omitBackground: true,
            timeout: 60000 // Wait up to 60 seconds for the page to load
        };

        await sakshshot(url, outputPath, options);
        console.log('Screenshot captured successfully and saved to', outputPath);
    } catch (error) {
        console.error('Error capturing screenshot:', error);
    }
})();