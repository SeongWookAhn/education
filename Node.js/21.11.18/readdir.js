const fs = require('fs');

console.log("Reading directory!!!!");
fs.readdir('./temp/hellodir', (err, files) => {
    if(err) throw err;

    files.forEach((file) => {
        console.log(file);
    });
});