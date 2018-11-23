var Project=(function(){ 
  function Project(idProject,title,cost,kolStrok,status){
        this.idProject=idProject;
        this.title=title;
        this.cost=cost;
        this.kolStrok=kolStrok;
        this.status=true; //не выполнен
    }

    Project.prototype.getIdProject=function(){
        return this.idProject;
    }

    Project.prototype.getTitle=function(){
        return this.title;
    }

    Project.prototype.getCost=function(){
        return this.cost;
    }

    Project.prototype.getKolStrok=function(){
        return this.kolStrok;
    }

    Project.prototype.getStatus=function(){
        if(this.status) {
            return true;
        }
        else{
            return false;
        }
    }

    Project.prototype.setStatus=function(bool){
        this.status=bool;
    }

    return Project;
})()
