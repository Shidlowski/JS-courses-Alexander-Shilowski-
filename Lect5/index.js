function debounce(callback, timeDelay){
   var timeId;

    return function() {
        var arg = arguments;

        if (timeId){
            clearTimeout(timeId);
        }

        timeId=setTimeout(
            function(){
                callback(arg);
            },
            timeDelay
        );

    }
}

function log(){
    console.log(arguments);
}

var debounced=debounce(log,500);

debounced('1');
debounced('2');

// промисицировать setTimeout
function delayTime(time){
return new Promise(function(resolve,reject){
    return setTimeout(resolve, time);
});
}


//Промисифицировать XMLHttpRequest

function getPromis(url){
    return new Promise(function(resolve,reject){
    var xhr=new XMLHttpRequest();

    xhr.open('GET',url);

    xhr.onload=function(){
        if (xhr.status===200){
            console.log(true);
          return resolve(xhr.response);
        }
        else
        {
          return reject("Error load url");
        }
    }

    xhr.onerror=function(){
        return reject("Error load url");
    }

    xhr.send();
});
}


getPromis("www.vk.com").then((result)=>
                    {console.log(result)
                    })
                    .catch((error)=>{
                    console.log(error)
                    });

////////////

function request(url) {
	return new Promise((res, rej) => {
		const delayTime = Math.floor(Math.random() * 10000) + 1;

		setTimeout(() => res(url), delayTime);
  	});
}

function resultPromis(arrUrl){
    return new Promise(function(resolve,reject){
        var arrUrlPromis=arrUrl.map(request);
        var arrResult=[];

        arrUrlPromis.array.forEach(elem => {
            elem.then(result =>{
                arrResult.push(result);

                if(arrResult.length==arrUrlPromis.length){
                    resolve(arrResult);
                }
            }, result=>{
                arrResult.push(result);
                
                if(arrResult.length==arrUrlPromis.length){
                    resolve(arrResult);
                }
            });
        });
    });

}

var arr=['vk.com','ok.ru','google.com','yandex,.ru'];

resultPromis(arr).then((result)=>{console.log(result);
                }).
                catch(()=>{
                   console.log("Error"); 
                });