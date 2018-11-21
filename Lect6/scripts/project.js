var Project=(function(){ 
  function Project(idProject,title,cost,kolStrok){
        this.idProject=idProject;
        this.title=title;
        this.cost=cost;
        this.kolStrok=kolStrok;
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

    return Project;
})()
