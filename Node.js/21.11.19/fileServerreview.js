const http = require('http');
const fs = require('fs');
const url = require('url');

var port = 3000;
var strIp = '127.0.0.1';

var server = http.createServer((req, res) => {
    var qString = url.parse(req.url, true);
    var fileName = "." + qString.pathname;

    fs.readFile(fileName, (err, data) => {
        if(err) {
            res.writeHead(404, {'Content-Type' : 'text/html; charset-uft8'});
            return res.end("404 Not Found!!!")
        }

        res.writeHead(200, {'Content-Type' : 'text/html; charset-uft8'});
        res.write(data);
        return res.end();
    });
});

server.listen(port, strIp, () => {
    console.log(`Running Server at http://${strIp}:${port}`);
});
