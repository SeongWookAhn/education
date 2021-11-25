const fs = require('fs');
var buf = Buffer.alloc(1024);
var text = "";

gugudan = () => {
    for (i = 2; i <= 9; i++) {
        for (j = 1; j <= 9; j++) {
            if(j > 1) {
                text +='  '
            }
            text += (i + "*"+ j + "=" + (i*j) + "  ");
        }
        text += '\n';
    }
    return text;        // 실행되지 않고 text안에 담는다
}

fs.open('gugudan_width.txt', 'w+', (err, fd) => {
    if(err) return console.error(err);

    fs.write(fd, gugudan(), 'utf8', (err, written, str) => {    // write로 인해 gugudan()의 결과값이 gugudan_height에 작성
        if(err) return console.error(err);

        fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
            if(err) return console.error(err);

            if(bytes > 0) console.log(buf.slice(0, bytes).toString());

            fs.close(fd, (err) => {
                if(err) return console.log(err);
        
            });
        });
    });
});