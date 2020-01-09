var fs = require('fs');

var text = fs.readFileSync("text.txt","utf-8");
console.log(text);

fs.readFile('text.txt','utf-8',function(err,data){
    console.log(data);
});