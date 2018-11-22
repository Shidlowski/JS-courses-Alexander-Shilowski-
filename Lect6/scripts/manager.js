var Manager=(function(){

    var Manager=function(idManager,name,lastName,expirience){
        this.idManager=idManager;
        this.name=name;
        this.lastName=lastName;
        this.expirience=expirience;
        this.status=true; // менеджер свободен
    }

    Manager.prototype.getIdManager=function(){
        return this.idManager;
    }

    Manager.prototype.getName=function(){
        return this.name;
    }

    Manager.prototype.getLastName=function(){
        return this.lastName;
    }

    Manager.prototype.getExpirience=function(){
        return this.expirience;
    }


    Manager.prototype.getStatus=function(){
        if(this.status) {
            return true;
        }
        else{
            return false;
        }
    }

    // метод связывающий проект и программистов
    Manager.prototype.zveno=function(project,proger){
        this.status=false; //говорим что менеджер занят
        addBlock(this.name,this.lastName,this.expirience,project,proger); //выводим данные о процессе
    }

    //добавление блока вывода 
    function addBlock(name,lastName,expirience,project,proger){

            var table=document.getElementById("block"); //в какую таблицу будем вставлять
            var row = document.createElement("tr"); //создание строки
            var statusProject = document.createElement("td"); //ячейка статуса
            var dataManager = document.createElement("td"); //ячейка менеджер проекта
            var dataProject= document.createElement("td"); //ячейка данных проекта
            var ostalosNapisat = document.createElement("td"); //ячейка сколько осталось написать строк кода
            var progers = document.createElement("td"); //ячейка программисты закрепленные за проектом
            
            //добавлем элементы в наши ячейки
            //cтатус
            statusProject.appendChild(document.createTextNode("Выполняется"));
            statusProject.style.backgroundColor="Red";
            row.appendChild(statusProject);
            //данные менеджера
            dataManager.appendChild(document.createTextNode("МЕНЕДЖЕР: "+name+" "+lastName+" опыт("+expirience+")"));
            dataManager.style.backgroundColor="Green";
            row.appendChild(dataManager);
            //данные проекта
            dataProject.appendChild(document.createTextNode("ПРОЕКТ: "+project.getTitle()+" стоимостью("+project.getCost()+" $)"));
            dataProject.style.backgroundColor="Green";
            row.appendChild(dataProject);
            //сколько осталось строк кода
            ostalosNapisat.appendChild("ОСТАЛОСЬ СТРОК: " + document.createTextNode(project.getKolStrok()));
            ostalosNapisat.id="kolStrok"+this.idManager; //ид поля
            ostalosNapisat.style.backgroundColor="Green";
            row.appendChild(ostalosNapisat);
            //список программистов определенных за проектом
            var spisok="ПРОГРАММИСТ(Ы): ";
            for(var i=0;i<proger.length;i++){
                spisok+=proger[i].getName()+" "+proger[i].getLastName()+" ("+proger[i].getLevel()+");";
            }
            progers.appendChild(document.createTextNode(spisok));
            progers.style.backgroundColor="Green";
            row.appendChild(progers);
            //добавляем строку в таблицу
            table.appendChild(row);
            table.style.width="100%";
    }


    return Manager;
})()