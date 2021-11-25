const express = require('express');
let app = express();

app.get('/', (req, res) => {
    console.log("Get request for /(root page)!!!");
    res.send('Hello Get /');
});

app.post('/', (req, res) => {
    console.log("Got a post request the root page!!!");
    res.send("Hello POST /");
});


app.delete('/del_user', (req, res) => {
    console.log("Get delete user request for /del_user");
    res.send("Hello DELETE");
});

app.get('/list_user', (req, res) => {
    console.log("Get request for /list_user");
    res.send("User Listing to page");
});

// ab와 cd 사이에 뭔가가 들어가는 라우터는 전부 여기서 처리.
app.get('/ab*cd', (req, res) => {
    console.log("Get request fo /ab*cd");
    res.send("Display pattern matching route");
});
// http://localhost:3000/ab1cd 입력시
// 브라우저엔 Display pattern matching route 출력, 콘솔엔 Get request fo /ab*cd 출력

var server = app.listen(3000, () => {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Server app listening at http://%s:$s", host, port);
});
