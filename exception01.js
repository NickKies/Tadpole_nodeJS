var fs = require('fs');
try {
    var data = fs.readFileSync('text.txt','utf8');
    console.log(data);
}catch{
    console.log(e);
}
try{
    fs.writeFileSync('text1.txt','Hello World ...!','utf8');
    console.log('File write complete');
}catch{
    console.log(e);
}