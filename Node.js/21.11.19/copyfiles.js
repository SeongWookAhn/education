const fs = require('fs');
var buf = Buffer.alloc(20480);

var pos = 0;
var reSize = 0;
var opFileName = '';
var cpFileName = '';

fs.readdir('./temp/', (err, files) => {
    if(err) throw err;

    files.forEach((file) => {
        if("metallica_seattle.mp4" === file) { // {} 빠짐
        opFileName = './temp/' + file;
        cpFileName = './target/' + file;

            fs.stat(opFileName, (err, stats) => {    // openSync로 적음
                if(err) throw err;

                fs.mkdir('./target/', (err) => {
                    if(err) throw err;

                   
                    var ofd = fs.openSync(opFileName, 'r');
                    var cfd = fs.openSync(cpFileName, 'a');

                    reSize = stats.size;

                    var readBytes = 0;      // 이줄 빠짐

                    while(true) {
                        readBytes = fs.readSync(ofd, buf, 0, buf.length, pos);
                        if(reSize > buf.length) {
                            fs.writeSync(cfd, buf, 0, buf.length);
                            pos += readBytes;
                            reSize -= readBytes;
                        }
                        else {
                            fs.writeSync(cfd, buf, 0, buf.length);
                            fs.closeSync(ofd);
                            fs.closeSync(cfd);
                            break;      // 또 빠짐..
                        }
                    }
                });
                return false;
            });
        }
    });
});