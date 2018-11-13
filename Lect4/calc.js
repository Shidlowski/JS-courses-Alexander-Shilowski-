//получение нажатия клавиши
function moveRect(e){
    code=e.keyCode;
    //числа с клавиатуры 
    if(code>=48 && code<=57){
        add( String.fromCharCode(code));
    }
    if(code===8) del.onclick(); //стирание с клавиатуры
    if(code===46) clear.onclick(); //очистка с клавиатуры
    //на дополнительной клавиатуре
    if(code===106) add("*"); //арифм операции
    if(code===111) add("/");
    if(code===107) add("+");
    if(code===109) add("-");
    if(code===13) enter.onclick(); //расчитать
}
addEventListener("keydown",moveRect);

var flag=new Boolean(false); //что бы использовалась только одна операция

//стирание последнего элемента
del.onclick=function(){
    var edit=window.document.getElementById("edit").innerText; //текстовое поля для вывода

    if(edit.length!=1){
        window.document.getElementById("edit").innerText=edit.substring(0,edit.length-1);
    }
    else {clear.onclick();}
}
//очистка
clear.onclick=function(){
    window.document.getElementById("edit").innerText="0";
    flag=false; //включаем кнопки действий
}

// получение значение элемента и добавление в строку
document.getElementById('parent').onclick = function(e){
    var elem =e.target.innerHTML;
    var err=new Boolean(false);
    for(var key=0;key<elem.length;key++){
        if(elem[key]==="<") {err=true;
        break;}
    }
    if(elem!=="&lt;==" && elem!="C" && elem!=="=" && err==false){
         add(elem); //добавление в строку
        }
    err=false;
}

//добавление элемента в строку
function add(str){
    var edit=window.document.getElementById("edit").innerText;
    if(edit==="0" && str!=="." ){
        window.document.getElementById("edit").innerText=str;
    }
    else{
        if((str==="*" || str==="/" || str==="+" || str==="-") && flag==false){
        window.document.getElementById("edit").innerText+=str;
        flag=true;
    }
    else if (str!=="*" && str!=="/" && str!=="+" && str!=="-") {
        window.document.getElementById("edit").innerText+=str;
    }
    }
}

enter.onclick=function(){
    str=window.document.getElementById("edit").innerText;
    var a=""; //число до знака
    var b=""; // число после знака
    var znak=""; //знак
    for(var i=0;i<str.length;i++){
        if(i==0){a+=str[i];} //включаем в число если знак перед числом
        else
        if(str[i]!=="*" && str[i]!=="/" && str[i]!=="+" && str[i]!=="-"){
            a+=str[i];
            }
        else{
            znak=str[i];
            b=str.substring(i+1,str.length);
            break;
        }
    }
var rezultZurnal=a+znak+b;
vivod(rezultZurnal);
}

//вывод в журнал
function vivod(chislo){
    var data=new Date();
    window.document.getElementById("edit").innerText=(eval(chislo)).toFixed(3);
    window.document.getElementById("textLog").innerText+=data.getHours()+":"+
                                                            data.getMinutes()+":"+
                                                                data.getMilliseconds()+" : "+
                                                                    chislo+" = "+(eval(chislo)).toFixed(3)+"\n";
flag=false; //можем производить действия с новым числом
}
