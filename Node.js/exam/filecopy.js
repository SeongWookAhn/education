const fs = require('fs');
var buf = Buffer.alloc(2048);

fs.stat('./temp/metallica_seattle.mp4', (err, stat) => {
    if(err) console.error(err);
});
fs.readdir('./temp', (err, files) => {
    if(err) console.error(err);
    //temp 안의 파일들을 forEach로 로직 적용할 준비
    files.forEach((file) => {
        var pos = 0;
        fs.stat("./temp/metallica_seattle.mp4", (err, stat) =>{
            if("metallica_seattle.mp4" === file) {
                console.log(files);
                console.log("*");
                
                fs.open('./temp/metallica_seattle.mp4', 'r+', (err, rfd) => {
                    if(err) console.error(err);

                    fs.read(rfd, buf, 0, buf.length, pos, (err, bytes) => {
                        if(err) console.error(err);

                        if(bytes > 0) console.log(buf.slice(0, bytes).toString());
                        pos++

                        fs.open('./temp/copyfile/metallica_seattle.mp4', 'w+', (err, wfd) => {
                            if(err) console.error(err);

                            fs.write(wfd, buf, (err, written) => {
                                if(err) console.error(err);
                                
                                fs.close(wfd, (err) => {
                                    if(err) console.error(err);
                                });
                            });
                        });
                    });
                });
            };
        });
    });
});

        //읽기

        // if file size > buf.length 로 읽고 저장
        // 저장 이후 consolo.log("*") 찍기

        // 위 조건이 아닐경우 (else) myfile.restfilesize 읽고
        // 저장
        // file stat(비동기) 읽고 forEach(동기)를 해야한다