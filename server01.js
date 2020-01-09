var http = require('http');
var server = http.createServer();
server.on('request',function(){
    console.log('Request on');
});
server.on('connection',function() {
    console.log('Connection on');
})
server.on('close',function(){
    console.log('Close on');
});
server.listen(3000);