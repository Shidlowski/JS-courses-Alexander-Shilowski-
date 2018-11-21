function connectScript(scriptURL) {
    var script = document.createElement('script');
    script.src = scriptURL;
    document.documentElement.appendChild(script);
}

connectScript("./scripts/project.js");
connectScript("./scripts/manager.js");
connectScript("./scripts/proger.js");

function click(elem,handler){
        elem.addEventListener("click",handler);
}

//наша скорость
var delay=document.getElementById("delay").value;
//прошедшее время
var tik=document.getElementById("tik").innerText;


var idInterval;

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
        //остановка игры
        clearInterval(idInterval);
        document.getElementById("startButton").value="Начать игру";
    }
};

click(startButton,start); //нажатие на кнопку начать игру

//запуск игры после проверки
function funct(){
    tik++;
    document.getElementById("tik").innerText=tik;
}

var project=[];
var manager=[];
var proger=[];

//создание нового проекта
click(document.getElementById("addProject"),newProject);

function newProject(){
    var nameProject=document.getElementById("nameProject").value;
    var costProject=document.getElementById("costProject").value;
    var kolStrokProject=document.getElementById("kolStrokProject").value;

    if(nameProject!=="" && costProject!=="" && kolStrokProject!==""){
        project.push(new Project(project.length,nameProject,costProject,kolStrokProject));
        insertProject(project[project.length-1]);

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
function insertProject(project){
    var tableInsertProject=document.getElementById("insertProject"); //в какую таблицу будем вставлять
    var row = document.createElement("tr"); //создание строки
    var cell = document.createElement("td"); //создаем ячейку в строке
    var idProject="pr"+project.getIdProject(); //индивидуальный индификатор кнопки

    var deleted=document.createElement("input");
    deleted.id=idProject;
    deleted.type="button";
    deleted.value="Удалить (X)";
    //удаление менеджера
    deleted.onclick=function(){
        cell.parentElement.removeChild(cell);
    }

    var str=document.createTextNode(project.getTitle()+": cтоимость("+project.getCost()+" $) Строк("+project.getKolStrok()+")");
    //добавлем элементы в нашу ячейку
    cell.appendChild(str);
    cell.appendChild(deleted);
    row.appendChild(cell);
    tableInsertProject.appendChild(row);
}




//добавление менеджера
click(document.getElementById("addManager"),newManager);

function newManager(){
    var nameManager=document.getElementById("nameManager").value;
    var lastNameManager=document.getElementById("lastNameManager").value;
    var expirienceManager=document.getElementById("expirienceManager").value;

    if(nameManager!=="" && lastNameManager!=="" && expirienceManager!==""){
        manager.push(new Manager(manager.length,nameManager,lastNameManager,expirienceManager));

        //очистка полей
    document.getElementById("nameManager").value="";
    document.getElementById("lastNameManager").value="";
    document.getElementById("expirienceManager").value="";

    //вставка на страницу
    insertManager(manager[manager.length-1]); //вставка на страницу добавленного менеджера
   

    }
    else {
        warning("Заполните данные менеджера!");
    }
}

//вставка нового менеджера на страницу для отображения
function insertManager(manager){
    var tableInsertManager=document.getElementById("insertManager"); //в какую таблицу будем вставлять
    var row = document.createElement("tr"); //создание строки
    var cell = document.createElement("td"); //создаем ячейку в строке
    var idManager="m"+manager.getIdManager(); //индивидуальный индификатор кнопки

    var deleted=document.createElement("input");
    deleted.id=idManager;
    deleted.type="button";
    deleted.value="Удалить (X)";
    //удаление менеджера
    deleted.onclick=function(){
        cell.parentElement.removeChild(cell);
    }

    var str=document.createTextNode(manager.getName()+" "+manager.getLastName()+" Опыт("+manager.getExpirience()+")");
    //добавлем элементы в нашу ячейку
    cell.appendChild(str);
    cell.appendChild(deleted);
    row.appendChild(cell);
    tableInsertManager.appendChild(row);
}


//добавление программиста

click(document.getElementById("addProger"),addProger);

function addProger(){
    var nameProger=document.getElementById("nameProger").value;
    var lastNameProger=document.getElementById("lastNameProger").value;
    var levelProger=document.getElementById("levelProger").value;
    if(nameProger!=="" && lastNameProger!==""){

        proger.push(new Proger(proger.length,nameProger,lastNameProger,levelProger));

        //очистка полей
        document.getElementById("nameProger").value="";
        document.getElementById("lastNameProger").value="";

        insertProger(proger[proger.length-1]); //вставка на страницу добавленного программиста
    }
    else {
        warning("Заполните данные программиста!");
    }
}

//вставка нового программиста на страницу для отображения
function insertProger(proger){
    var tableInsertProger=document.getElementById("insertProger"); //в какую таблицу будем вставлять
    var row = document.createElement("tr"); //создание строки
    var cell = document.createElement("td"); //создаем ячейку в строке
    var idProger="p"+proger.getIdProger(); //индивидуальный индификатор кнопки

    //если не senior 
    if(proger.getLevel()!=="senior"){
    var upgradeProger=document.createElement("input");
    upgradeProger.id=idProger;
    upgradeProger.type="button";
    upgradeProger.value="Повысить уровень (↑)";
   upgradeProger.onclick=function(){
        proger.levelUp();
        deleted.onclick();
        insertProger(proger);
    }
    }

    var deleted=document.createElement("input");
    deleted.id=idProger;
    deleted.type="button";
    deleted.value="Удалить (X)";
    //удаление прогера
    deleted.onclick=function(){
        cell.parentElement.removeChild(cell);
    }

    var str=document.createTextNode(proger.getName()+" "+proger.getLastName()+" "+proger.getLevel()+"\n");
    //добавлем элементы в нашу ячейку
    cell.appendChild(str);
    if (proger.getLevel()!=="senior"){
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
    ,2000);
}