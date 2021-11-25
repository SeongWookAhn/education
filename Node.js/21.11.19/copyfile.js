const fs = require("fs");
const { isRegExp } = require("util/types");
var buf = Buffer.alloc(20480);

var pos = 0;            //포지션(읽을 위치)
var reSize = 0;         //남은사이즈
var exFileName = '';    //기존파일
var chFileName = '';    //복사파일

fs.readdir("./temp", (err, files) => {      // ./temp 디렉토리를 읽는다.
    if(err) throw err;

    files.forEach((file) => {                //forEach => for문의 압축 => 찾은 요소들을 반복해서 함수실행해주는것
        if("metallica_seattle.mp4" === file) {  //mp4 파일명이 같을경우 아래의 함수 실행
            exFileName = './temp/' + file;    //mp4 파일이 담긴 위치 파일있음
            chFileName = './copy/' + file;    //mp4 파일이 담길 위치 파일없음
            
            fs.stat(exFileName, (err, stats) => { //mp4 파일의 stat을 불러옴
                if(err) throw err;

                reSize = stats.size;        //남은파일 사이즈 = mp4 파일 stats 사이즈
                console.log("fileName = " + exFileName + ", reSize = " + reSize);

                fs.mkdir('./copy', (err) => {       //폴더가 없을경우 copy 폴더 생성
                    if(err) throw err;
                });
                var rfd = fs.openSync(exFileName, 'r'); //기존파일이 담긴 위치를 비동기로 열기
                var wfd = fs.openSync(chFileName, 'a');  //복사파일이 담길 위치를 비동기로 열고 쓰기('a' = 기존 파일을 그대로 두고 기존파일 이후부터 저장)

                var readBytes = 0;          //읽은 바이트값
                while(true) {
                    readBytes = fs.readSync(rfd, buf, 0, buf.length, pos);  // 읽은 바이트값 = 기존파일 동기로 읽기(기존파일, buf, 0, buf.length(20480), pos(읽을 위치값))
                    if(reSize > buf.length) {              //남은 파일사이즈가 기존파일 buf.lenght 길이보다 클경우 아래 함수 실행
                        fs.writeSync(wfd, buf, 0, buf.length); //복사 파일 길이에 동기로 작성
                        pos += readBytes;   //포지션값에 읽은 바이트값을 더하기
                        reSize -= readBytes; //남은 파일사이즈에 읽은 바이트값 빼기
                    }
                    else {                  //남은 사이즈값이 기존파일 buf.length 길이보다 작을경우 아래 함수 실행
                        fs.writeSync(wfd, buf, 0, readBytes);       //남은 사이즈값을 동기로 쓰기
                        fs.closeSync(rfd);                          //rfd 닫기
                        fs.closeSync(wfd);                          //wfd 닫기
                        break;
                    }
                }
            });

            return false;
        }
    });
});