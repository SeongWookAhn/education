const fs = require('fs');
var buf = Buffer.alloc(1024);
var text = '';

gugudan = () => {
    for(i = 2; i <= 9; i++) {
        for(j = 1; j <= 9; j++) {
            if(j > 1) {
                text += '  '
            }
            text += (i + "*" + j + "=" + (i*j) + "  ");
        }
        text += '\n'
    }
    return text;
}

fs.open('ex11.txt', 'r+', (err, fd) => {
    if(err) return console.error(err);

    fs.write(fd, gugudan(), 'utf8', (err, written, str) => {
        if(err) return console.error(err);

        fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
            if(err) return console.error(err);

            if(bytes > 0) console.log(buf.slice(0, bytes).toString());

            fs.close(fd, (err) => {
                if(err) return console.error(err);
            });
        });
    });
});