const http = require("http");

// Option to be used by request
var options = {
    host: 'localhost',
    port: '3000',
    path: '/helloworld.html'
}

var callback = function(res) {
    var body = '';
    Response.on('data', function(data){
        body  += data;
    });

    Response.on('end', () => {
        console.log(body);
    });
}

var req = http.request(options, callback);
req.end();