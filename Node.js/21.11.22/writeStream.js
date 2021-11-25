const fs = require("fs");

var data = "Standard Input / Output Streams Library Header that defines the standard input/output stream objects";

var writerStream = fs.createWriteStream('output.txt');
writerStream.write('data', 'utf-8');

writerStream.end();

writerStream.on('finish', function() {
  console.log("Finished write file!!!");
});

writerStream.on('error', (err) => {
  console.log(err.stack);
});

console.log("writestream file write finished!!!")