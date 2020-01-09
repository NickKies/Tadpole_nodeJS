var fs = require('fs');
var data = 'Hello World ...!';

fs.writeFile('text2.txt', data, 'utf8', function(err) {
    console.log('write file async complete !');
});

fs.writeFileSync('text3.txt',data,'utf8');
console.log('write file sync complete !');