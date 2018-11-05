// zadanie 1
function zad1(a,b){
    return a>b?true:false;
}

console.log(zad1(2,1));

// zadanie 2
function zad2(str){
    return "Вы ввели * "+str+" *";
}
console.log(zad2("я водичка!"));

// zadanie 3
function zad3(a){
    if(a===null || a===undefined) return true;
        else  return false;
}
console.log(zad3());

// zadanie 4
var obj= {
name: "Alex",
age: 21
};

function zad4(per){
    per.cheked=true;
    return per ;
}

console.log(zad4(obj));

// zadanie 5

function zad5(chislo){
    var ch1=Math.abs(chislo);
    var ch2=-1*ch1;
    for(var i=ch2;i<=ch1;i++){
        console.log(i+"");
    }
}

zad5(-3);