const fs = require("fs");
const zlib = require('zlib');

fs.readdir('./temp/', (err, files) => {
  if(err) throw err;

  fs.mkdir('./copy', (err) => {
    if(err) throw err;
  })

  files.forEach((file) => {
    temp = './temp/' + file;
    copy = './copy/' + file;

    var readerStream = fs.createReadStream(temp);
    var writeStream = fs.createWriteStream(copy);
    readerStream.pipe(writeStream);

    fs.createReadStream(temp)
      .pipe(zlib.createGzip())
      .pipe(fs.createWriteStream(`${copy}.gz`));
  });
});
