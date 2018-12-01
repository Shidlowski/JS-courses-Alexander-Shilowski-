class Project{
  constructor(idProject,title,cost,kolStrok,status){
        this.idProject=idProject;
        this.title=title;
        this.cost=cost;
        this.kolStrok=kolStrok;
        this.status=status;
        this.status=true; //не выполнен
    }

    getIdProject(){
        return this.idProject;
    }

    getTitle(){
        return this.title;
    }

    getCost(){
        return this.cost;
    }

    getKolStrok(){
        return this.kolStrok;
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

}
