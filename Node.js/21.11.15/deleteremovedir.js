// 내부 파일 삭제 후 디렉토리까지 삭제

const fs = require('fs');


fs.readdir('./temp/hellodir', (err, files) => {
    if(err) throw err;

    // hellodir안의 파일들을 forEach로 로직 적용할 준비완료.
    files.forEach((file) => {
        // hellodir안의 파일 전부 삭제
        fs.unlink(`./temp/hellodir/${file}`, (err) => {
            if(err) return console.log(err);
        })
    });

    // hellodir 삭제
    fs.rmdir('./temp/hellodir', (err) => {
        if(err) throw err;
    })
})
