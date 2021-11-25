const fs = require('fs')
var buf = Buffer.alloc(20480)

//파일 비동기로 오픈
//파일 forEach로 로직 적용시킬 준비
//파일 경로 설정
//파일 남은 사이즈 설정
//파일 읽기
//파일 쓰기
//남은 파일 사이즈를 작성한 파일 뒤에 붙이기
//창닫기

var pos = 0;
var reSize = 0;
var opFileName = '';
var cpFileName = '';

fs.readdir("./source", (err, files) => {   // files 빠짐
    if(err) throw err;

    files.forEach((file) => {
        if("metallica_seattle.mp4" === file) {

            opFileName = './source/' + file;
            cpFileName = './target/' + file;

            fs.stat(opFileName, (err, stats) => {
                if(err) throw err;

                reSize = stats.size;
                
                fs.mkdir('./target', (err) => {
                    if(err) throw err;
                });

                var ofd = fs.openSync(opFileName, 'r');
                var cfd = fs.openSync(cpFileName, 'a');

                var readBytes = 0;      //var 빠짐
                while(true) {
                    readBytes = fs.readSync(ofd, buf, 0, buf.length, pos);  //이줄 전체 빠짐
                    if(reSize > buf.length) {   //순서가 바뀜 fs.writeSync가 먼저와야됨
                        fs.writeSync(cfd, buf, 0, buf.length);
                            // if(err) throw err; 안들어감
                            pos += readBytes;  //buf.length라고 씀
                            reSize -= readBytes; //stats.size라고 씀
                    }
                    else {
                        fs.writeSync(cfd, buf, 0, readBytes);
                        fs.closeSync(ofd);
                        fs.closeSync(cfd);
                        break;
                    }
                }
            });

            return false;
        }
    });
});
