require('http').createServer(function (request, response) {
    response.writeHead(200, {'Content-type':'text/html'});
    response.end('<h1>Hello Web Server with Node.js!!!</h1>');
}).listen(3000,function(){
    console.log('3000 port is using...');
});