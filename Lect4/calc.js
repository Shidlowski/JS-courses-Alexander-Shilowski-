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
}

// получение значение элемента и добавление в строку
document.getElementById('parent').onclick = function(e){
    var elem =e.target.innerHTML;
    var err=new Boolean(false);
    for(var key=0;key<elem.length;key++){
        if(elem[key]==="<") {err=true;
        break;}
    }
    if(elem!=="←" && elem!="C" && elem!=="=" && err==false){    
         add(elem); //добавление в строку
        }
    err=false;
}

//добавление элемента в строку
function add(str){
    var edit=window.document.getElementById("edit").innerText;
    var posSimvol=edit[edit.length-1];
    if(edit==="0" && str!=="+" && str!=="-" && str!=="*" && str!=="/" && str!=="."){
        window.document.getElementById("edit").innerText=str;
    }
    else{
        if(posSimvol!=="+" && posSimvol!=="-" && posSimvol!=="*" && posSimvol!=="/" && posSimvol!=="."){
        window.document.getElementById("edit").innerText+=str;}
        else{
            if(str!=="+" && str!=="-" && str!=="*" && str!=="/" && str!=="."){
            window.document.getElementById("edit").innerText+=str;}  
        }
    }

}

//вывод в журнал выражения и вывод результата
enter.onclick=function(){
    str=window.document.getElementById("edit").innerText; //выражение
    var data=new Date();
    window.document.getElementById("edit").innerText=(eval(str));
    window.document.getElementById("textLog").innerText+=data.getHours()+":"+
                                                            data.getMinutes()+":"+
                                                                data.getMilliseconds()+" : "+
                                                                    str+" = "+eval(str)+"\n";
}
