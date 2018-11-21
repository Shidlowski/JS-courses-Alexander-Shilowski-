var domRun=function(){
   function dom() {
    
    }
  
    dom.prototype.addClick=function(elem,handler){
        elem.addEventListener("click",handler);
    };

    return dom;
}();


var dom=new domRun();



dom.addClick(startButton,function start(){
    if(document.getElementById("nameCompany").value!=="" && document.getElementById("moneyCompany").value!==""){
        alert("yes");    
    }
    else alert("Введите Название компании и бюджет");
});






