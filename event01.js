var events =require('events');
var eventEmitter = new events.EventEmitter();
var connectHandler = function connected() { // 이벤트 핸들러 호출 3
    console.log("Connevtion Successful");
    eventEmitter.emit("data_received"); // 이벤트를 발생 4
}
eventEmitter.on('connection',connectHandler); // 이벤트와 핸들러 연결 2
eventEmitter.on('data_received',function(){ // 이벤트와 함수와의 연결 5
    console.log("Data Received");
});
eventEmitter.emit('connection');    //이벤트를 발생1
console.log("Pogram has ended");    //6