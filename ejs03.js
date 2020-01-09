var http = require('http');
var fs = require('fs');
var ejs = require('ejs');

var header = fs.readFileSync('header.ejs','utf8');
var content = fs.readFileSync('content.ejs','utf8');

var server = http.createServer();
server.on('request',doRequest);
server.listen(3000);
console.log('Server running!');

function doRequest(req, res){
    var html = ejs.render(header, {
        title : "제목입니다.",
        contnet: ejs.resnder(content,{
            message:"텍스트 메세지"
        })
    });
    res.writeHead(200, {
        'Content-Type':'text/html'
    });
    res.write(html);
    res.end();
}