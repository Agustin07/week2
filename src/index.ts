// ---- external modules
const minimist = require('minimist');
//const yargs = require('yargs');
// ---- npm modules
//const path = require('path');
const fs = require('fs');
// ----  internal modules
import * as SCommands from "./SCommand.js";
//import { Url } from "url";
try{
// ---- start app!
console.log(process.argv.slice(2));
const args = minimist(process.argv.slice(2), { string: [ 'n','e','i','_' ], Url: [ 'f'] });
let commandsList : SCommands.Bitacora;


commandsList = SCommands.readCommand().isACommand(args.n, 'n').isACommand(args.e, 'e').isACommand(args.f, 'f').isACommand(args.i, 'i') as SCommands.Bitacora;


console.log(commandsList);

} catch(err) {
    console.log((<Error>err).message);
}