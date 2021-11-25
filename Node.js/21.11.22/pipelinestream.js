const fs = require("fs");

var readerStream = fs.createReadStream("input.txt");
var writerStream = fs.createWriteStream('output.txt');
// var readerStream = fs.createReadStream("metallica_seattle.mp4");
// var writerStream = fs.createWriteStream('seattle.mp4');

readerStream.pipe(writerStream);

console.log("Write pipe stream finished!!!");