const fs = require("fs");
var buf = Buffer.alloc(1024);

console.log("Open existing file!!!");
fs.open('input.txt', 'r+', function(err,fd){  // r+ : read하고 저장도 하겠다.
    if(err) return console.error(err);  // 파일인지 소캣인지를 알려줄거야

    console.log("File open success!!!");

    console.log("Reading file!!!");

    fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {

        if(err) return console.error(err);
        
        console.log("Reading file success");
        
        if(bytes > 0) console.log(buf.slice(0, bytes).toString());
    });
});