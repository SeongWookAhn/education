const express = require("express");
const app = express();
const bodyParser = require("body-parser")

const host = '127.0.0.1';
const port = 3000;

var urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static('public'));

app.get('/index.html', function(req, res)  {
  res.sendFile(__dirname + "/" + "index.html");
});

app.get('/process_get', (req, res) => {
  var response = {
    first_name:req.query.first_name,
    last_name:req.query.last_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

app.post('/process_post', urlencodedParser, (req, res) => {
  var response = {
    first_name:req.body.first_name,
    last_name:req.body.last_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

app.listen(port, host, () => {
  console.log(`Application Server running at http://${host}:${port}/`);
})