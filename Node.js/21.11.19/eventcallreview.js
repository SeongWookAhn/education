const events = require('events');
const eventEmitter = new events.EventEmitter();

var conEvent = function(connected) {
    console.log("First connection success!!!");

    eventEmitter.emit('data_recieved');
}

eventEmitter.on('connection', conEvent);

eventEmitter.on('data_recieved', function() {
    console.log("data recieved success!!!");
});

eventEmitter.emit('connection');

console.log("Program finished!!!")