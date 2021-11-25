const fs = require('fs');

fs.rename('lorem.txt', 'hello.txt', (err) => {
    if(err) throw err;

    console.log('File rename success!!!');
});