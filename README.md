# noBSqr client-side javascript QR code generator

A fork of Chuck Fairy's Vanilla.js, which is a small javascript file that runs client-side and outputs QR codes using the HTML5 Canvas element or tables for support with legacy browsers.

New Features:
- Border width can now be updated dynamically (HTML canvas & tables).
- The QR code URL/text string can be displayed above, below, or over the QR code (HTML canvas only).
- When URL/text is displayed over the QR code, error correction is automatically set to maximum.
- The dots composing the QR code can be rendered with rounded corners.
- If noBorder is set as true, then borderWidth is set to 0 (and vice versa).
- Borders less than 20px force the URL/text to display over the QR code.

## How to use

```html
<script src="VanillaQR.min.js"></script>
<script>

//Create qr object
//Minus the url, these are the defaults
var qr = new VanillaQR({

    url: "https://github.com/NHV/noBSqr.js",
    size: 300,

    colorLight: "#ffffff",
    colorDark: "#000000",

    //output to table or canvas
    toTable: false,

    //Ecc correction level 1-4
    ecclevel: 1,

    //Use a border or not
    noBorder: false,

    //Border size to output at
    borderSize: 30

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

Through module

```js
import VanillaQR from "VanillaQR"


//See above for more
var qr = new VanillaQR({
    url: "https://github.com/NHV33/noBSqr.js",
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

noBSqr is based on Vanilla QR by Chuck Fairy, which is based on a port of a java qr code library that he could no longer find. Legend says he is still searching for it to this very day.

## Live Demos

* Coming Soon

## Special Thanks

- @chuckfairy
