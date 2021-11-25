const fs = require('fs');
const buf = Buffer.alloc(20);

var pos = 0;
var reSize = 0;
var opFileName = '';
var cpFileName = '';

fs.readdir('./temp', (err, files) => {
    if(err) throw err;

    files.forEach((file) => {
        if("test.txt" === file) {
            opFileName = './temp/' + file;
            cpFileName = './copy/' + file;

            fs.mkdir('./copy', (err) => {
                if(err) throw err;
            });

            var rfd = fs.openSync(opFileName, 'r');
            var cfd = fs.openSync(cpFileName, 'a');

            while(true) {
                if('test.txt' === '') {
                    
                }
            }
        }
    });
});