var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

http.createServer(function(req, res){
    data = {name:'apple', age:20};
    fs.readFile('EJStest02.ejs','utf8',function(err,file){
        console.log(file);
        var html = ejs.render(file,data);
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(html);
    });
}).listen(3000, function(){
    console.log('Server running at http://127.0.0.1:3000');
});