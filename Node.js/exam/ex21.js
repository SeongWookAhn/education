const fs = require('fs');
var buf = Buffer.alloc(10);
fs.stat('./temp/metallica_seattle.mp4', (err, stat) => {
    if(err) throw err;    
});
fs.readdir('./temp', (err,files) => {
    if(err) throw err;
        
    files.forEach((file) => {
        fs.stat("./temp/metallica_seattle.mp4", (err, stat) => {
            if("metallica_seattle.mp4" === file) {
            console.log(files);
            console.log(typeof files);
            console.log(file);
            console.log(typeof file);
            console.log("*");
            fs.open('./temp/metallica_seattle.mp4', 'r+', (err, rfd) => {
                if(err) throw err;

                fs.read(rfd, buf, 0, buf.length, 0, (err, bytes) => {
                    if(err) throw err;

                    if(bytes > 0) console.log(buf.slice(0, bytes).toString());
                    fs.open('./copyfile/metallica_seattle.mp4', 'r+' , (err, wfd) => {
                        if(err) throw err;

                        fs.write(wfd, buf, (err, written, buffer) => {
                            fs.close(wfd, (err) => {
                                if(err) throw err;
                            })
                        })
                    })

                    fs.close(rfd, (err) => {
                        if(err) throw err;
                    })
                }) 
            })
            };
        });
    });
});





// for() {
//     읽고
//     if file size > buf.length 읽고
//     저장
//     console.log("*")
//     else myfile.restfilesize 읽어
//     저장
// }

//  source file을 똑같이 다른 디렉토리로 옮긴다