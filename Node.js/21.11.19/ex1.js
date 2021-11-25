const fs = require('fs');
var buf = Buffer.alloc(20480);

var pos = 0;
var reSize = 0;
var opFileName = '';
var cpFileName = '';

fs.readdir('./temp', (err, files) => {
    if(err) throw err;

    files.forEach((file) => {
        if("metallica_seattle.mp4" === file) {
            opFileName = './temp/' + file;  // var 넣음 (빠져야됨)
            cpFileName = './copy/' + file;  // var 넣음 (빠져야됨)

            fs.mkdir('./copy', (err) => {
                if(err) throw err;
            });

            fs.stat(opFileName, (err, stats) => {       //fd 자리에 './temp'씀
                if(err) throw err;

                reSize = stats.size

                // fs.readSync(opFileName, (err) => {   필요없는 부분
                //     if(err) throw err;

                    var ofd = fs.openSync(opFileName, 'r');
                    var cfd = fs.openSync(cpFileName, 'a');
                    while(true) {
                        readBytes = fs.readSync(ofd, buf, 0, buf.length, pos);
                        if(reSize > buf.length) {
                            fs.writeSync(cfd, buf, 0, buf.length);
                            pos += readBytes;
                            reSize -= readBytes;
                        }
                        else {
                            fs.writeSync(cfd, buf, 0, readBytes);
                            fs.closeSync(ofd);
                            fs.closeSync(cfd);
                            break; //break 빠짐
                        }
                    }
                });

                return false;
        }
    });
});