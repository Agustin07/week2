import * as Utils from "./utils.js";

interface SCommand{
    s:true;
    expreg: RegExp;
    flag: String | undefined;
    substitution: String;
    option: String;
    fileToWrite?: String;
}

export interface Bitacora{
    lista: SCommand[];
    isACommand(input: String | [] | undefined, selectedOption: String) : Bitacora;
}

export function readCommand(): Bitacora{
   let commandsList : SCommand[]=[]; 
   return { lista:commandsList,
    
        isACommand(input, selectedOption): Bitacora {
            if ( input instanceof String ) {
                if ( selectedOption !== 'f' ) {
                    commandsList.push(formater( input , selectedOption));
                    return this;
                } else {
                    if(Utils.checkFile(input)){
                        return this;
                    } else {
                        throw new Error("Oh no! No file specified");
                    }
                }    
            } else if ( input instanceof Array ) {
                for ( let element of input) {
                commandsList.push(formater( element, selectedOption));
                }
                return this;
            }
            else {
                return this;
            }
        }
   }
}


const formater = (input: String, selectedOption: String): SCommand => {
    //let newCommand : SCommand;
    let cmdPart = input.split('/');
    if (cmdPart[0] === 's') {
        let sExist = true;
        if (cmdPart.length === 4) {
            switch(cmdPart[3]){
                case 'g' :
                    return { 
                        s : sExist,
                        expreg: new RegExp(cmdPart[1],'g'),
                        flag : cmdPart[3],
                        substitution : cmdPart[2],
                        option : selectedOption 
                    }
                break;

                case 'I' :
                    return { 
                        s : sExist,
                        expreg: new RegExp(cmdPart[1],'i'),
                        flag : cmdPart[3],
                        substitution : cmdPart[2],
                        option : selectedOption 
                    }
                break;

                case '' :
                    return { 
                        s : sExist,
                        expreg: new RegExp(cmdPart[1],'g'),
                        flag : cmdPart[3],
                        substitution : cmdPart[2],
                        option : selectedOption 
                    }
                break;

                default :
                    if (cmdPart[3].match('^w.*$')){
                        let wFlag : string[] = cmdPart[3].split(' ');
                        return { 
                            s : sExist,
                            expreg : new RegExp(cmdPart[1],'i'),
                            flag : wFlag[0],
                            substitution : cmdPart[2],
                            option : selectedOption,
                            fileToWrite : wFlag[1]
                        }
                    } else {
                        return { 
                            s : sExist,
                            expreg: new RegExp(cmdPart[1],''),
                            flag : cmdPart[3],
                            substitution : cmdPart[2],
                            option : selectedOption 
                        }
                    }
                break;
            }
        } else {
           throw new Error('Oh no! Incorrect substitution command! 2');
        }
    } else {
        throw new Error('Oh no! Incorrect substitution command! 3');
    }
}