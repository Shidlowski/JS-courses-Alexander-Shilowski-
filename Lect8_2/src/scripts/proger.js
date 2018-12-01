class Proger{

    constructor(idProger,name,lastName,level,deleted){
        this.idProger=idProger;
        this.name=name;
        this.lastName=lastName;
        this.level=level;
        this.status=true;
        this.deleted=deleted;
        this.deleted=false; //не удален
        this.kolStrok=0;
        this.costStrokLevel=0;
    }
    
    getName(){
        return this.name;
    }

    getLastName(){
        return this.lastName;
    }
    
    getLevel(){
        return this.level;
    }

    getIdProger(){
        return this.idProger;
    }

    levelUp(){
        if(this.level==="junior"){
            this.level="midle";
        }
        else{
            if(this.level==="midle"){
                this.level="senior";
            }
        }
    }

    
    
    kolStrokCode(){
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

    getKolStrok(){
        return this.kolStrok;
    }

    
   getCostStrokLevel(){
        return this.costStrokLevel;
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

    getDeleted(){
        return this.deleted;
    }

    setDeleted(bool){
        this.deleted=bool;
    }

}