// bin/build.js

const fs = require('fs');
const path = require('path');
const minify = require('minify');

// Get the directory of the script
// const __dirname = path.resolve();

console.log(__dirname);

// Paths to input and output files
const inputFilePath = path.join(__dirname, '..', 'NoBSQR.js');
const outputFilePath = path.join(__dirname, '..', 'NoBSQR.min.js');

// Minify the JavaScript file
const minifyOptions = {
  js: {
    compress: true,
    mangle: true,
    output: {
      comments: false,
    },
  },
};

minify(inputFilePath, minifyOptions)
  .then((minifiedContent) => fs.writeFileSync(outputFilePath, minifiedContent))
  .catch((error) => console.error('Error minifying:', error));

// Module build
const moduleFilePath = path.join(__dirname, '..', 'noBSQR.module.js');
const footerFilePath = path.join(__dirname, '..', 'footer.js');

// Concatenate files for module build
const moduleContent = fs.readFileSync(inputFilePath) + fs.readFileSync(footerFilePath);
fs.writeFileSync(moduleFilePath, moduleContent);
