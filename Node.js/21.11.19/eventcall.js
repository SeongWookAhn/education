const events = require("events");
const eventEmitter = new events.EventEmitter(); //new는 뒤에 events(모듈) 안에 있는 EventEmitter() 라는 기능을 복사해와서 해당 폴더에 있는 eventEmitter에 보관

var connectHandler = function connected() {     //(3) connectHandler 함수가 백그라운드에서 대기시키고
    console.log("connection success!!!");       //(4) 트리거가 발생하는 순간 connectHandler가 나온다.

    eventEmitter.emit('data_recieved');         //(5)
};

eventEmitter.on('connection', connectHandler);  //(2)

eventEmitter.on('data_recieved', function() {   //(6)
    console.log('data recieved success!!!');
});

eventEmitter.emit('connection');    //emit -> 이벤트 발생 (1)
                            //emit 과 on이 있는경우 emit이 먼저 발생하고 on이 발생
console.log("Program fisished!!!!!");           //(7)

//connection은 예약어가 아니므로 다른텍스트가 와도 상관없음.