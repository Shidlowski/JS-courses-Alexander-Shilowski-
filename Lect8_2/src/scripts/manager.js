class Manager{

    constructor(idManager,name,lastName,expirience,status,deleted){
        this.idManager=idManager;
        this.name=name;
        this.lastName=lastName;
        this.expirience=expirience;
        this.status=status;
        this.status=true; // менеджер свободен
        this.deleted=deleted;
        this.deleted=false; //не удален
        this.id=0;
    }

    getIdManager(){
        return this.idManager;
    }

    getName(){
        return this.name;
    }

    getLastName(){
        return this.lastName;
    }

    getExpirience(){
        return this.expirience;
    }


    getStatus(){
        if(this.status) {
            return true;
        }
        else{
            return false;
        }
    }

    setStatus(bool){
        this.status=bool;
    }

    // метод связывающий проект и программистов
   zveno(project,proger){
        this.status=false; //говорим что менеджер занят
        this.project=project;
        this.proger=proger;
        this.id=project.getIdProject();
        Manager.addBlock(this.id,this.name,this.lastName,this.expirience,project,proger); //выводим данные о процессе
    }

    //добавление блока вывода 
    static addBlock(id,name,lastName,expirience,project,proger){

            const table=document.getElementById("block"); //в какую таблицу будем вставлять
            const row = document.createElement("tr"); //создание строки
            const statusProject = document.createElement("td"); //ячейка статуса
            const dataManager = document.createElement("td"); //ячейка менеджер проекта
            const dataProject= document.createElement("td"); //ячейка данных проекта
            const ostalosNapisat = document.createElement("td"); //ячейка сколько осталось написать строк кода
            const progers = document.createElement("td"); //ячейка программисты закрепленные за проектом
            //добавлем элементы в наши ячейки
            //cтатус
            statusProject.appendChild(document.createTextNode("Выполняется"));
            statusProject.id="status"+id;
            statusProject.style.backgroundColor="Red";
            row.appendChild(statusProject);
            //данные менеджера
            dataManager.appendChild(document.createTextNode("МЕНЕДЖЕР: "+name+" "+lastName+" опыт("+expirience+")"));
            dataManager.style.backgroundColor="Green";
            row.appendChild(dataManager);
            //данные проекта
            dataProject.appendChild(document.createTextNode("ПРОЕКТ: "+project.getTitle()+" строк("+project.getKolStrok()+")"+" стоимостью("+project.getCost()+" $)"));
            dataProject.style.backgroundColor="Green";
            row.appendChild(dataProject);
            //сколько осталось строк кода
            ostalosNapisat.appendChild(document.createTextNode("ОСТАЛОСЬ СТРОК: "+project.getKolStrok()));
            ostalosNapisat.id="kolStrok"+id; //ид поля
            ostalosNapisat.style.backgroundColor="Green";
            row.appendChild(ostalosNapisat);
            //список программистов определенных за проектом
            let spisok="ПРОГРАММИСТ(Ы): ";
            for(let i=0;i<proger.length;i++){
                spisok+=proger[i].getName()+" "+proger[i].getLastName()+" ("+proger[i].getLevel()+");";
            }
            progers.appendChild(document.createTextNode(spisok));
            progers.style.backgroundColor="Green";
            row.appendChild(progers);
            //добавляем строку в таблицу
            table.appendChild(row);
            table.style.width="100%";
    }

    //обновление данных проекта
    tik(){
        let budgetCompany=document.getElementById("money").innerHTML;
        let ostalosStrok=document.getElementById("kolStrok"+this.id).innerHTML;
        ostalosStrok=ostalosStrok.substring(16,ostalosStrok.length);
        //посчитаем сколько строк напишут программисты и сколько заработают
        for(let i=0;i<this.proger.length;i++){
            this.proger[i].kolStrokCode(); //определение зп и количество строк
            budgetCompany=Number(budgetCompany)-this.proger[i].getCostStrokLevel(); //оплата в зависимости от уровня
            document.getElementById("money").innerText=budgetCompany;
            ostalosStrok=Number(ostalosStrok)-Number(this.proger[i].getKolStrok())*Number(this.expirience); //количество строк в зависимости от уровня
            document.getElementById("kolStrok"+this.id).innerText="ОСТАЛОСЬ СТРОК: "+ostalosStrok;
        }
        if(ostalosStrok<=0) {
        document.getElementById("status"+this.id).innerText="Выполнено";
        document.getElementById("status"+this.id).style.backgroundColor="Green";
        document.getElementById("kolStrok"+this.id).innerText="ОСТАЛОСЬ СТРОК: 0";
        this.status=true; //делаем менеджера свободным
            //прибавим к бюджету компании оплату за проект
        document.getElementById("money").innerText=Number(document.getElementById("money").innerHTML)+Number(this.project.getCost());
        }
    }

    getJobProger(){
        return this.proger;
    }

    getDeleted(){
        return this.deleted;
    }

    setDeleted(bool){
        this.deleted=bool;
    }

}