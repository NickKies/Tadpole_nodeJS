var http = require('http');
var fs = require('fs');
var jade = require('jade');

http.createServer(function(req,res){
    fs.readFile('jadepage02.jade','utf8',function(err,data){
        var fn = jade.compile(data);

        res.writeHead(200, {'Content_Type':'text/html'});
        res.end(fn({
            name: "Apple",
            description:"Delicious"
        }));
    });
}).listen(3000,function() {
    console.log('server running at http://localhost:3000');
});