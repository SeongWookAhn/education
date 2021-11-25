var fs = require("fs");

fs.read("input.txt", (err, data) => {
    if(err) return console.error(err);

    console.log("Asyncronous read : " + data.toString());
});

var data = fs.readFileSync('input.txt');
console.log("Synchronous read : " + data.toString());

console.log("Finished program!!!");