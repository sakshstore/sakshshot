# sakshstot Screenshot Package

A Node.js package to take screenshots of a given URL using Puppeteer.

## Installation

To install the package, run:

```bash
npm install sakshshot
```

## Usage

You can use the package as a library in your Node.js application.

```javascript
const sakshshot = require('sakshshot');
const fs = require('fs');
const path = require('path');

async function captureScreenshot(url) {
    const outputPath = path.join(__dirname, 'screenshot.png');
    const options = {
        type: 'jpeg',
        quality: 80,
        fullPage: true,
        omitBackground: true,
        timeout: 60000 // Wait up to 60 seconds for the page to load
    };
    await sakshshot(url, outputPath, options);
    const image = fs.readFileSync(outputPath);
    return image;
}

// Example usage
(async () => {
    try {
        const url = 'https://sakshamapp.com';
        await captureScreenshot(url);
        console.log('Screenshot captured successfully');
    } catch (error) {
        console.error('Error capturing screenshot:', error);
    }
})();
```

## Options

The `sakshshot` function supports the following options:

- **`type`**: The image format. Can be either `'jpeg'` or `'png'`. Defaults to `'png'`.
- **`quality`**: The quality of the image, between 0-100. Not applicable to PNG images.
- **`fullPage`**: When true, takes a screenshot of the full scrollable page. Defaults to false.
- **`clip`**: An object specifying the clipping region of the page. Should have properties `x`, `y`, `width`, and `height` (all in pixels).
- **`omitBackground`**: Hides the default white background and allows capturing screenshots with transparency. Defaults to false.
- **`encoding`**: The encoding of the image. Can be either `'base64'` or `'binary'`. Defaults to `'binary'`.
- **`captureBeyondViewport`**: When true, captures a screenshot beyond the viewport. Defaults to true.
- **`fromSurface`**: When true, captures the screenshot from the surface, rather than the view. Defaults to true.
- **`timeout`**: Maximum time in milliseconds to wait for the page to load. Defaults to 30000.

## Testing

To run the example usage, execute:

```bash
node main.js
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Contact

For any questions or feedback, please contact [susheel2339@gmail.com](mailto:susheel2339@gmail.com).