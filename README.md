# NoBSQR client-side javascript QR code generator

A fork of Chuck Fairy's Vanilla.js, which is a small javascript file that runs client-side and outputs QR codes using the HTML5 Canvas element or tables for support with legacy browsers.

New Features:
- Border width can now be updated dynamically (HTML canvas & tables).
- QR code background and pixels can be rendered with alpha transparency.
- QR code pixels can be rendered with rounded corners.
- URL/text string can be displayed above, below, or over the QR code (HTML canvas only).
- When URL/text is displayed over the QR code, error correction is automatically set to maximum.

## Live Demos

* http://nobsqr.com
* https://nhv33.github.io/NoBSQR

## How to use

```html
<script src="NoBSQR.min.js"></script>
<script>

//Create a qr object
//Below are the custom parameters and their default values (except for url)
var qr = new NoBSQR({

    // QR Content (only supports ASCII characters)
    url: "https://github.com/NHV33/NoBSQR.js",

    // Error Correction (levels 1-4)
    ecclevel: 1,

    // Size Parameters
    size: 300,
    borderSize: 30,

    // Background Color (supports alpha transparency)
    // Colors must be a hexidecimal color value (with or without the alpha channel)
    colorLight: "#FFFFFFFF",

    // Pixel Color (supports alpha transparency)
    // Colors must be a hexidecimal color value (with or without the alpha channel)
    colorDark: "#000000FF",
    
    // Toggle border
    noBorder: false,

    // Toggle use of HTML canvas or tables (for legacy browsers)
    toTable: false,

    // Toggle text display (can also be hidden if textPosition is "hidden")
    textDisplay: true,

    // Text Position ("top", "center", "bottom", "hidden")
    textPosition: "bottom",

    // Manual Text Adjustment (Accepts a number between -99 and 100)
    // This is useful if textPosition is "center" and large text prevents scanning.
    textSizeAdjust: 0,
    
    // Pixel Rounding Percent (0-100)
    // Values larger than 0 will disable transparency for pixels (colorDark property)
    pixelRadius: 0,

    // Automatic Text Resizing
    // These determine text resizing accuracy. Only change if performance is slow.
    textResizeIterationCap = customize.textResizeIterationCap || 1000,
    textResizeAmount = customize.textResizeAmount || 1,

});

//Canvas or table is stored in domElement property
document.body.appendChild(qr.domElement);

//Alternatively you can create an image from the canvas
//png, jpg, jpeg, webp, gif, bmp, tiff, x-icon, svg+xml, xxx
//Currently canvas dataURL mime types are not the same
var imageElement = qr.toImage("png");

if(imageElement) {
    document.body.appendChild(imageElement);
}


//You can recreate the qr code to a new url like so
//If you have appended the domElement it will change
qr.url = "https://github.com/chuckfairy"; // <== Shoutout to the original creator
qr.colorLight = "#0000000";
qr.colorDark = "#ffffff";
qr.init();

</script>
```

How to import as a module

```js
import NoBSQR from "NoBSQR"


//See above for more
var qr = new NoBSQR({
    url: "https://github.com/NHV33/NoBSQR.js",
});
```

## Browser support

All browsers with canvas and canvas 2d context support
* Chrome > 30
* IE > 8
* Firefox > 33
* Opera > 25
* Safari > 7.0
* Android > 4.0

Table support fallback

* Chrome
* IE > 6
* Firefox
* Opera
* Safari
* Andriod

NoBSQR is based on Vanilla QR by Chuck Fairy, which is based on a port of a java qr code library that he could no longer find. Legend says he is still searching for it to this very day.

## Special Thanks

- Creator of VanillaQR.js: chuckfairy
