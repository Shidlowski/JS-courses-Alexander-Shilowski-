console.log("Логгер начал свою работу");

// вариант с exit на новой строке
/*
const fs = require("fs"); 
const process=require("process");
const filePath="tmp.txt";

const logger=fs.createWriteStream(filePath);
process.stdout.write=logger.write.bind(logger);
process.stdin.pipe(process.stdout);

process.stdin.on("data", function(data){
    const str=data.toString();

    if(str.trim()==="exit"){
        process.exit();
    }
});
*/

//вариант с выходом exit даже при последовательно набранном тексте

const fs = require("fs"); 
const process=require("process");
const filePath="tmp.txt";

let pos=0;
let str=""; //строка дозаписи в файл
let strExit=""; //строка сборки слова exit для выхода
//стерем данные из файла
fs.writeFile(filePath,"",function(err){
    if(err) throw err;
});

const stdin=process.stdin;
const stdout=process.stdout;

stdin.setRawMode(true);

stdin.setEncoding('utf8');

function writeFile(flag){
    if(flag){
    fs.appendFile(filePath,str,function(err){
        if(err) {throw err;}
    });
    }
    else{
        fs.appendFile(filePath,str,function(err){
            if(err) {throw err;}
            else{
                stdout.write("\nКонец работы логгера");
                process.exit();
            }
        });
    }

}

process.stdin.on("data", function(key){
    
    //
    if(key.toString()==="\u0003"){
        process.exit();
    }

    function positionLine(){
        if(pos!==0) {
            pos--;
            stdout.cursorTo(pos);
        }
    }
    
    // если нажали backspace
    if(key.toString()==="\u0008"){  
        positionLine();
        stdout.write(" ");
        pos++;
        positionLine();
        if(str.length!==0){
        str=str.substring(0,str.length-1);
        }
    }
    else{
    //проверяем если enter нажали
    if ( (key.toString()).charCodeAt(0) === 13 ) { 
        stdout.write("\n");
        pos=0;
        str+="\n";
        writeFile(true);
        str="";
    }
    else{
        stdout.write(key.toString());
        if(strExit.length===0 && key.toString()==="e"){
            strExit="e";
            }
            else{
                if(strExit.length===1 && key.toString()==="x"){
                    strExit+="x";
                }
                else{
                    if(strExit.length===2 && key.toString()==="i"){
                        strExit+="i";
                    }
                    else{
                        if(strExit.length===3 && key.toString()==="t") {
                            //слово собрано завершаем процесс и уберем exit
                            writeFile(false);
                        }
                        else{
                            strExit="";
                            str+=key.toString();
                        }

                    }
                }
            }
        pos++;
    }

}

});

