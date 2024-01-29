#!/bin/bash

## Requires minify

__dirname=$( dirname "$0" );

echo $__dirname;

cat $__dirname/../noBSqr.js | minify --js > $__dirname/../noBSqr.min.js


## module build

module_file="$__dirname/../noBSqr.module.js"
rm $module_file

cat $__dirname/../noBSqr.js >> $module_file
cat $__dirname/../footer.js >> $module_file
