var fs = require('fs');

resizeBy.readFile('text.txt','utf8',function(err, data){    //비동기
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});

fs.writeFile('text3.txt','Hello World .. !','utf8', function(err){  //동기
    if(err){
        console.log(err);
    }else{
        console.log('File Write Complete')
    }
});
