var Manager=(function(){

    var Manager=function(idManager,name,lastName,expirience,){
        this.idManager=idManager;
        this.name=name;
        this.lastName=lastName;
        this.expirience=expirience;
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

    return Manager;
})()