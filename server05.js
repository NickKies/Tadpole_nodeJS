var http = require('http');
var fs = require('fs');
var url = require('url');
http.createServer(function(request, response){
    var pathName = url.parse(request.url).pathname;
    if(pathName == '/'){
        fs.readFile('index.html',function(error,data){
            response.writeHead(200,{'Content-Type':'text/html'});
            response.end(data);
        });
    }else if(pathName =='/OtherPage'){
        fs.readFile('subpage.html',function(error,data){
            response.writeHead(200,{'Content-Type':'text/html'});
            response.end(data);
        });
    }
}).listen(3000,function(){
    console.log('server running at http://127.0.0.1.3000');
});
