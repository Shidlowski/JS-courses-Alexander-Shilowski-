//подключение других js
function connectScript(scriptURL) {
    const script = document.createElement('script');
    script.src = scriptURL;
    document.documentElement.appendChild(script);
}

connectScript("./scripts/project.js");
connectScript("./scripts/manager.js");
connectScript("./scripts/proger.js");

//
function click(elem,handler){
        elem.addEventListener("click",handler);
}

//наша скорость
const delay=1000;
//прошедшее время
let tik=document.getElementById("tik").innerText;


let idInterval;

let project=[];
let manager=[];
let proger=[];

let idProject=0;
let idManager=0;
let idProger=0;


//функция выполнения после нжатия на кнопку начать игру
function start(){
    if(document.getElementById("startButton").value==="Начать игру"){
    if(document.getElementById("nameCompany").value!=="" &&
       document.getElementById("moneyCompany").value!=="" ){
            //запуск игры
            document.getElementById("startButton").value="Закончить";
            document.getElementById("money").innerText=document.getElementById("moneyCompany").value;
            document.getElementById("visibleAdd").style.display="table-row";
            idInterval=setInterval(funct,delay);
        }
       else {
            warning("Введите данные компании!!!");
       }
    } 
    else{
        if(document.getElementById("startButton").value!=="Начать новую игру"){
             //остановка игры
        clearInterval(idInterval);
        document.getElementById("startButton").value="Начать новую игру";
        }
        else{
            //перезашружаем страницу для новой игры
            window.location.reload();
        }
       
    }
};

click(startButton,start); //нажатие на кнопку начать игру

//процесс выполнения
let jobProcess=[];
let i=0; //проект выполнения
//запуск игры после проверки введенных данных
function funct(){
    tik++;
    document.getElementById("tik").innerText=tik;

    //проверяем если ли у нас проект в очереди и менеджер с программистами
        if(sProject() && sManager() && sProger()){
            let i=0;
            //находим первого свободного менеджера
            for(i=0;i<manager.length;i++){ 
                if(!manager[i].getDeleted() && manager[i].getStatus()){
                    break;
                }
            }
            
            //находим первый свободный проект
            for(k=0;k<project.length;k++){
                if(project[k].getStatus()){
                    break;
                }
            }
            let svobodProger=[]; //cкладируем свободных программистов
            for(let key=0;key<proger.length;key++){
                if(!proger[key].getDeleted() && proger[key].getStatus()){ //елси программист свободен
                    proger[key].setStatus(false); //делаем его занятым
                svobodProger.push(proger[key]);
                }
            }
            //удаляем проект из очереди
            document.getElementById("pr"+project[k].getIdProject()).onclick();
            project[k].setStatus(false);//проект занят
            //скрываем менеджера из списка свободных
            document.getElementById("m"+manager[i].getIdManager()).style.display="none";
            manager[i].setStatus(false); //менеджер занят
            //скрываем программистов которых забрал менеджер
            for(let key=0;key<svobodProger.length;key++){
                document.getElementById("p"+svobodProger[key].getIdProger()).style.display="none";
            }

            manager[i].zveno(project[k],svobodProger); // отдаем менеджеру на обработку
            
        }   

        //отобразим работу занятых менеджеров
        for(let i=0;i<manager.length;i++){

            if(manager[i].getStatus()===false){ //елси менеджер занят
                manager[i].tik();
                if(manager[i].getStatus()){ //елси менеджер довел проект до конца вернем его в список свободных
                    //возращаем менеджера
                    document.getElementById("m"+manager[i].getIdManager()).style.display="table-row";
                    
                    //возращаем всех прогеров которые работали над проектом
                    let arrAdd = manager[i].getJobProger();
                    for(let i=0;i<arrAdd.length;i++){
                            arrAdd[i].setStatus(true); //делаем их свободными
                            document.getElementById("p"+arrAdd[i].getIdProger()).style.display="table-row";
                    }

                }
                chekGame();
            }
        }
    

}

function chekGame(){
    if (document.getElementById("money").innerHTML===0) {
        //остановка игры
    clearInterval(idInterval);
    document.getElementById("warning").innerText="ВЫ ПРОИГРАЛИ! У ВАС НЕ ОСТАЛОСЬ НИ ЦЕНТА!";
    document.getElementById("visibleWarning").style.display="block";
    document.getElementById("startButton").value="Начать новую игру";
    }
    else{
        if(document.getElementById("money").innerHTML<0) {
            //остановка игры
    clearInterval(idInterval);
            document.getElementById("warning").innerText="ВЫ ПРОИГРАЛИ! И ЕЩЕ ДОЛЖНЫ ОПЛАТИТЬ РАБОТУ ПРОГРАММИСТАМ!";
            document.getElementById("visibleWarning").style.display="block";
            document.getElementById("startButton").value="Начать новую игру";
        }
    }

}

//возращает есть ли свободные менеджера
function sManager(){
    if(manager.length===0) {return false;}
    else{
    for(let k=0;k<manager.length;k++){
        if(!manager[k].getDeleted() && manager[k].getStatus()) {
        return true;    
        }
    }
    return false;
}
}

//возращает есть ли свободные программисты
function sProger(){
    if(proger.length===0) {return false;}
    else{
    for(let k=0;k<proger.length;k++){
        if(!proger[k].getDeleted() && proger[k].getStatus()) {
        return true;    
        }
    }
    return false;
}
}

//возращает есть ли свободные проекты
function sProject(){
    if(project.length===0) {return false;}
    else{
    for(let k=0;k<project.length;k++){
        if(project[k].getStatus()) {
        return true;    
        }
    }
    return false;
}
}


//создание нового проекта
click(document.getElementById("addProject"),newProject);

function newProject(){
    const nameProject=document.getElementById("nameProject").value;
    const costProject=document.getElementById("costProject").value;
    const kolStrokProject=document.getElementById("kolStrokProject").value;

    if(nameProject!=="" && costProject!=="" && kolStrokProject!==""){
        project[idProject]=new Project(idProject,nameProject,costProject,kolStrokProject);
        insertProject(project[idProject]);
        idProject++;//индекс для следующего прокта
           //очистка полей
           document.getElementById("nameProject").value="";
           document.getElementById("costProject").value="";
           document.getElementById("kolStrokProject").value="";
           
    }
    else {
        warning("Заполните детали проекта");
    }

}

//вставка нового проекта на страницу для отображения
function insertProject(pr){
    const tableInsertProject=document.getElementById("insertProject"); //в какую таблицу будем вставлять
    const row = document.createElement("tr"); //создание строки
    const cell = document.createElement("td"); //создаем ячейку в строке
    let idPr="pr"+pr.getIdProject(); //индивидуальный индификатор кнопки

    const deleted=document.createElement("input");
    deleted.id=idPr;
    deleted.type="button";
    deleted.value="Удалить (X)";
    //удаление проекта
    deleted.onclick=function(){
        cell.parentElement.removeChild(cell);
    }

    const str=document.createTextNode(pr.getTitle()+": cтоимость("+pr.getCost()+" $) Строк("+pr.getKolStrok()+")");
    //добавлем элементы в нашу ячейку
    cell.appendChild(str);
    cell.appendChild(deleted);
    row.appendChild(cell);
    tableInsertProject.appendChild(row);
}




//добавление менеджера
click(document.getElementById("addManager"),newManager);

function newManager(){
    const nameManager=document.getElementById("nameManager").value;
    const lastNameManager=document.getElementById("lastNameManager").value;
    const expirienceManager=document.getElementById("expirienceManager").value;

    if(nameManager!=="" && lastNameManager!=="" && expirienceManager!==""){
        manager[idManager]=new Manager(idManager,nameManager,lastNameManager,expirienceManager);
        //очистка полей
    document.getElementById("nameManager").value="";
    document.getElementById("lastNameManager").value="";
    document.getElementById("expirienceManager").value="";

    //вставка на страницу
    insertManager(manager[idManager]); //вставка на страницу добавленного менеджера
    idManager++; //инедкс для следующего менеджера
    }
    else {
        warning("Заполните данные менеджера!");
    }
}

//вставка нового менеджера на страницу для отображения
function insertManager(m){
    const tableInsertManager=document.getElementById("insertManager"); //в какую таблицу будем вставлять
    const row = document.createElement("tr"); //создание строки
    const cell = document.createElement("td"); //создаем ячейку в строке
    let idM="m"+m.getIdManager(); //индивидуальный индификатор кнопки скрытия
    row.id=idM;
    const deleted=document.createElement("input");

    //удаление менеджера
    deleted.type="button";
    deleted.value="Удалить (X)";
    //удаление менеджера 
    deleted.onclick=function(){
        manager[m.getIdManager()].setDeleted(true); //удален, пометка
        cell.parentElement.removeChild(cell);
    }

    const str=document.createTextNode(m.getName()+" "+m.getLastName()+" Опыт("+m.getExpirience()+")");
    //добавлем элементы в нашу ячейку
    cell.appendChild(str);
    cell.appendChild(deleted);
    row.appendChild(cell);
    tableInsertManager.appendChild(row);
}


//добавление программиста

click(document.getElementById("addProger"),addProger);

function addProger(){
    const nameProger=document.getElementById("nameProger").value;
    const lastNameProger=document.getElementById("lastNameProger").value;
    const levelProger=document.getElementById("levelProger").value;
    if(nameProger!=="" && lastNameProger!==""){

        proger[idProger]=new Proger(idProger,nameProger,lastNameProger,levelProger);

        //очистка полей
        document.getElementById("nameProger").value="";
        document.getElementById("lastNameProger").value="";

        insertProger(proger[idProger]); //вставка на страницу добавленного программиста
        idProger++;//индекс для следующего программиста
    }
    else {
        warning("Заполните данные программиста!");
    }
}

//вставка нового программиста на страницу для отображения
function insertProger(p){
    const tableInsertProger=document.getElementById("insertProger"); //в какую таблицу будем вставлять
    const row = document.createElement("tr"); //создание строки
    const cell = document.createElement("td"); //создаем ячейку в строке
    let idP="p"+p.getIdProger(); //индивидуальный индификатор кнопки скрытия
    row.id=idP;
    //если не senior 
    let upgradeProger=document.createElement("input");
    if(p.getLevel()!=="senior"){
    upgradeProger.type="button";
    upgradeProger.value="Повысить уровень (↑)";
    upgradeProger.onclick=function(){
        p.levelUp();
        deleted.onclick();
        proger[p.getIdProger()].setDeleted(false); 
        insertProger(p);
    }
    }

    const deleted=document.createElement("input");
    deleted.type="button";
    deleted.value="Удалить (X)";
    //удаление прогера
    deleted.onclick=function(){
        proger[p.getIdProger()].setDeleted(true); //программист удален
        cell.parentElement.removeChild(cell);
    }

    const str=document.createTextNode(p.getName()+" "+p.getLastName()+" "+p.getLevel()+"\n");
    //добавлем элементы в нашу ячейку
    cell.appendChild(str);
    if (p.getLevel()!=="senior"){
        cell.appendChild(upgradeProger);}
    cell.appendChild(deleted);
    row.appendChild(cell);
    tableInsertProger.appendChild(row);
}

//функция предупреждения
function warning(line){
    document.getElementById("warning").innerText=line;
    document.getElementById("visibleWarning").style.display="block";
    setTimeout(()=>{
    document.getElementById("visibleWarning").style.display="none"; 
    }
    ,5000);
}