var modul =( function(){
    return{
        undefinedCheck: function(val){
            return val===undefined;
        },
        nullCheck: function(val){
            return val===null;
        },
        nanCheck: function(val){
            return val!=val;
        },
        //проверка на пустоту объекта
        isEmptyObj: function(object) {
           return Object.keys(object).length===0;
           //true - объект пустой
        },
        //аналог функции map
        analogMap: function(arr, funct){
            var newArr=[];
            for(var i=0;i<arr.length;i++){
                newArr[i]=funct(arr[i]);
            }
            return newArr;
        },
        // рандом из диапазона 
        randCh: function(min, max){
            return Math.floor(min+Math.random()*(max+1-min));
        },
        //глубокое сравнение
        compareObject: function(obj1, obj2){
            if(Object.keys(obj1).length!==Object.keys(obj2).length){
                return false;
            } else{
                   if(this.isEmptyObj(obj1) && this.isEmptyObj(obj12 )) {return true;
                } else {
                    var res;
                    for(var key in obj1){
                        if(typeof(obj1[key])==='Object'){
                            this.compareObject(obj1[key],obj2[key]);
                        }
                        else {
                            res=(obj1[key]===obj2[key]);
                        }
                        if(!res) return false;
                    }
                    return res;
                }
            }
        },
        //удаление св-в
        delPropertyObj: function(obj1,funct){
            var result={};
            for(var key in obj1){
               if(funct(obj1[key])){
                    result[key]=obj1[key];
                }
            }
            return result;
        }

    }
}())
//тест модуля
console.log(modul.undefinedCheck());
console.log(modul.nullCheck(null));
console.log(modul.nanCheck());

var a={};
console.log(modul.isEmptyObj(a));

console.log(modul.randCh(1,5));

var arr=['mama','papa','super'];
functTest=function(elem){   
                 return elem.length;}
arr2=modul.analogMap(arr,functTest);
console.log(arr2);

var objTest={name: 'Alexander',
            lastName: 'Shidlowski',
            age: 22
            }
console.log(modul.delPropertyObj(objTest,functTest));

var objTest2={name: 'Alexander',
              lastName: 'Shidlowski',
              age: 23
             }
console.log(modul.compareObject(objTest,objTest2));