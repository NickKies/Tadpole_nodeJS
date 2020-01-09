var http = require('http');
var fs = require('fs');
var jade = require('jade');

http.createServer(function (req, res){
    fs.readFile('jadepage01.jade','utf8',function(error,data){
        var fn = jade.compile(data);

        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(fn());
    });
}).listen(3000, function(){
    console.log('Server running at http://127.0.0.1:3000');
});