var fs = require('fs');
var http = require('http');
http.createServer(function (request, response){
    fs.readFile('img/fruitcar.png',function(error,data){
        response.writeHead(200, {'Content-Type':'image/png'});
        response.end(data);
    });
}).listen(3000,function(){
    console.log('Server running at http://127.0.0.1:3000');
});
http.createServer(function (request,response){
    fs.readFile('video/fruit.mp3', function(error,data){
        response.writeHead(200,{'Content-Type':'audio/mp3'});
        response.end(data);
    });
}).listen(3001,function(){
    console.log('Server running at http://127.0.0.1:3001');
});