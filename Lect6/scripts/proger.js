var Proger=(function(){

    function Proger(idProger,name,lastName,level){
        this.idProger=idProger;
        this.name=name;
        this.lastName=lastName;
        this.level=level;
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

    return Proger;
})()