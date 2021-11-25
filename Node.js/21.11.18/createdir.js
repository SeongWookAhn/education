const fs = require('fs');
console.log("Create ./hellodir!!!");
fs.mkdir('./temp/hellodir', (err) => {
    if(err) throw err;

    console.log("create directory success!!!");
});