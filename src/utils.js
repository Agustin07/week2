"use strict";
exports.__esModule = true;
// modulos externos npm
var path = require('path');
var fs = require('fs');
function getFileAddress(dirname, fileName) {
    if (dirname === void 0) { dirname = process.cwd(); }
    var fName = path.normalize(fileName);
    var fileAddress = path.join(dirname, fName);
    return fileAddress;
}
exports.getFileAddress = getFileAddress;
function checkFile(fileAddress) {
    if (fs.existsSync(fileAddress)) {
        return true;
    }
    else {
        throw new Error("Oh no! You call -f, but there isn't a file!");
    }
}
exports.checkFile = checkFile;
