var Proger=(function(){

    function Proger(idProger,name,lastName,level){
        this.idProger=idProger;
        this.name=name;
        this.lastName=lastName;
        this.level=level;
        this.status=true;
    }
    Proger.prototype.getName=function(){
        return this.name;
    }

    Proger.prototype.getLastName=function(){
        return this.lastName;
    }
    
    Proger.prototype.getLevel=function(){
        return this.level;
    }

    Proger.prototype.getIdProger=function(){
        return this.idProger;
    }

    Proger.prototype.levelUp=function(){
        if(this.level==="junior"){
            this.level="midle";
        }
        else{
            if(this.level==="midle"){
                this.level="senior";
            }
        }
    }

    var kolStrok;
    var costStrokLevel=200;
    var costProstoya=5;
    
    Proger.prototype.kolStrokCode=function(){
        if(this.level==="junior") {
            kolStrok=200;
        }else{
            if(this.level==="midle"){
                kolStrok=400;
                costStrokLevel=400;
            }
            else{
                kolStrok=600;
                costStrokLevel=600;
            }
        }
    }

    Proger.prototype.getKolStrok=function(){
        return this.kolStrok;
    }

    
    Proger.prototype.getCostStrokLevel=function(){
        return this.costStrokLevel;
    }

    Proger.prototype.getStatus=function(){
        if(this.status) {
            return true;
        }
        else{
            return false;
        }
    }

    Proger.prototype.setStatus=function(bool){
        this.status=bool;
    }

    return Proger;
})()