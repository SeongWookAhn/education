var fs = require("fs");

fs.open('input.txt', 'r+', function(err, fd) {
    if(err) return console.error(err);

    console.log("File Opened Success!!!");
})

console.log("Get file information");
fs.stat('input.txt', (err, stat) => { //stat => status 로도 받을 수 있음
    if(err) return console.error(err);

    console.log(stat);
    console.log("get file information success!!!");

    console.log("isFile ? " + stat.stat.isFile());
    console.log("isDirectory ? " + stat.isDirectory());
});
