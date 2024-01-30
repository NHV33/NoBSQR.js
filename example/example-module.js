import NoBSQR from "../NoBSQR.module.js";

var qr = new NoBSQR({
	url: "http://example.com",
	size: 300,
	borderSize: 30,
	colorLight: "#FAA7F9",
	colorDark: "#3A005E",

	// toTable: true
});

document.body.appendChild(qr.domElement);
