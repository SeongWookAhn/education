const fs = require('fs');

console.log("Remove Directory!!!");
fs.rmdir('./temp/hellodir', (err) => {
    if(err) throw err;

    fs.readdir('./temp/', (err, files) => {
        if(err) throw err;

        files.forEach((file) => {
            console.log(file);
        });
    });
});