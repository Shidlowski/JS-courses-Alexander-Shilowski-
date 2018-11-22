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

        

    }


    return Manager;
})()