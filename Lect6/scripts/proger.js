var Proger=(function(){

    function Proger(idProger,name,lastName,level){
        this.idProger=idProger;
        this.name=name;
        this.lastName=lastName;
        this.level=level;
        this.status=true;

        this.kolStrok=0;
        this.costStrokLevel=0;
        this.oklad=5;
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

    
    
    Proger.prototype.kolStrokCode=function(){
        if(this.level==="junior") {
            this.kolStrok=50;
            this.costStrokLevel=20;
        }else{
            if(this.level==="midle"){
                this.kolStrok=100;
                this.costStrokLevel=40;
            }
            else{
                this.kolStrok=200;
                this.costStrokLevel=60;
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