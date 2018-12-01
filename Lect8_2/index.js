const http=require("http");
const static = require('node-static');
const file = new static.Server('./src');

const server = http.createServer(function(req, res) {
    file.serve(req, res);
    });

server.listen(8080, (err)=>{
    if(err) {
        console.log("ERROR");
    }
    else {
        console.log("listen 8080");
    }
});

