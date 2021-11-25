const http = require('http');
var port = 3000;
var strIp = '127.0.0.1'

var server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html; charset-utf8'})
    res.write(req.url);
    res.end();
});

server.listen(port, strIp, () => {
    console.log(`Running Server at http://${strIp}:${port}`);
});