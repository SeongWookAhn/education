const fs = require("fs");
var buf = Buffer.alloc(1024);

console.log("Open input.txt file!!!");
fs.open('input.txt','r+',function(err,fd){
    if(err) return console.error(err);

    console.log("input.txt open success!!!");

    console.log("truncate input.txt file after 20 bytes!!!");

    fs.truncate(fd, 20, (err) => {
        if(err) return console.error(err);

        console.log("input.tx file truncated success!!!");
        
        console.log("input.tx file truncated success!!!");

        fs.read(fd, buf, 0, buf.length, 0, (err,bytes,dataBuf) => {
            if(err) return console.error(err);

            if(bytes > 0) {
                console.log(buf.slice(0, bytes).toString());
            }
            fs.close(fd, (err) => {
                if(err) return console.error(err);
            });
        });
    });
    // here is best file close....
});