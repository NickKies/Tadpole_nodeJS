process.on('exit',function(){
    console.log('안녕히가세요 !');
});

process.on('uncaughtException',function (error){
    console.log('예외가 발생했습니다!!');
});

var count = 0;
var id=setInterval(function() {
    count++;
    if(count ==3){ clearInterval(id);}
    error.error.error();
},2000);