"use strict";
exports.__esModule = true;
// ---- external modules
var minimist = require('minimist');
//const yargs = require('yargs');
// ---- npm modules
//const path = require('path');
var fs = require('fs');
// ----  internal modules
var SCommands = require("./SCommand.js");
//import { Url } from "url";
try {
    // ---- start app!
    var args = minimist(process.argv.slice(2), { string: ['n', 'e', 'i', '_'], Url: ['f'] });
    var commandsList = void 0;
    commandsList = SCommands.readCommand().isACommand(args.n, 'n').isACommand(args.e, 'e').isACommand(args.f, 'f').isACommand(args.i, 'i');
    console.log(commandsList);
}
catch (err) {
    console.log(err.message);
}
