// modulos externos npm
const path = require('path');
const fs = require('fs');

export function getFileAddress(dirname: String = process.cwd(),fileName:String): String {
    let fName = path.normalize(fileName) as String;
    let fileAddress = path.join(dirname,fName) as String;
    return fileAddress;
}

export function checkFile(fileAddress: String): Boolean {
    if (fs.existsSync(fileAddress)) { 
        return true;
    }
    else {
        throw new Error("Oh no! You call -f, but there isn't a file!");
    }
} 