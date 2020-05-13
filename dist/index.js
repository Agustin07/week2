"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// ---- external modules
var minimist = require('minimist');
//const yargs = require('yargs');
// ---- npm modules
//const path = require('path');
var fs = require('fs');
// ----  internal modules
var SCommands = __importStar(require("./SCommand.js"));
//import { Url } from "url";
try {
    // ---- start app!
    console.log(process.argv.slice(2));
    var args = minimist(process.argv.slice(2), { string: ['n', 'e', 'i', '_'], Url: ['f'] });
    var commandsList = void 0;
    commandsList = SCommands.readCommand().isACommand(args.n, 'n').isACommand(args.e, 'e').isACommand(args.f, 'f').isACommand(args.i, 'i');
    console.log(commandsList);
}
catch (err) {
    console.log(err.message);
}
//# sourceMappingURL=index.js.map