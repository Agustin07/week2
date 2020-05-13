"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Utils = __importStar(require("./utils.js"));
function readCommand() {
    var commandsList = [];
    return { lista: commandsList,
        isACommand: function (input, selectedOption) {
            if (input instanceof String) {
                if (selectedOption !== 'f') {
                    commandsList.push(formater(input, selectedOption));
                    return this;
                }
                else {
                    if (Utils.checkFile(input)) {
                        return this;
                    }
                    else {
                        throw new Error("Oh no! No file specified");
                    }
                }
            }
            else if (input instanceof Array) {
                for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
                    var element = input_1[_i];
                    commandsList.push(formater(element, selectedOption));
                }
                return this;
            }
            else {
                return this;
            }
        }
    };
}
exports.readCommand = readCommand;
var formater = function (input, selectedOption) {
    //let newCommand : SCommand;
    var cmdPart = input.split('/');
    if (cmdPart[0] === 's') {
        var sExist = true;
        if (cmdPart.length === 4) {
            switch (cmdPart[3]) {
                case 'g':
                    return {
                        s: sExist,
                        expreg: new RegExp(cmdPart[1], 'g'),
                        flag: cmdPart[3],
                        substitution: cmdPart[2],
                        option: selectedOption
                    };
                    break;
                case 'I':
                    return {
                        s: sExist,
                        expreg: new RegExp(cmdPart[1], 'i'),
                        flag: cmdPart[3],
                        substitution: cmdPart[2],
                        option: selectedOption
                    };
                    break;
                case '':
                    return {
                        s: sExist,
                        expreg: new RegExp(cmdPart[1], 'g'),
                        flag: cmdPart[3],
                        substitution: cmdPart[2],
                        option: selectedOption
                    };
                    break;
                default:
                    if (cmdPart[3].match('^w.*$')) {
                        var wFlag = cmdPart[3].split(' ');
                        return {
                            s: sExist,
                            expreg: new RegExp(cmdPart[1], 'i'),
                            flag: wFlag[0],
                            substitution: cmdPart[2],
                            option: selectedOption,
                            fileToWrite: wFlag[1]
                        };
                    }
                    else {
                        return {
                            s: sExist,
                            expreg: new RegExp(cmdPart[1], ''),
                            flag: cmdPart[3],
                            substitution: cmdPart[2],
                            option: selectedOption
                        };
                    }
                    break;
            }
        }
        else {
            throw new Error('Oh no! Incorrect substitution command! 2');
        }
    }
    else {
        throw new Error('Oh no! Incorrect substitution command! 3');
    }
};
//# sourceMappingURL=SCommand.js.map