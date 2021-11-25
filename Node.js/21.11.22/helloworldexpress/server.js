let express = require("express");
let app = express();

app.use(express.static('public'));
app.use(express.static('common'));

app.get('/', (req, res) => {
  res.send("Hello World!!!!");
});

var server = app.listen(3000, () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Listening at http://%s:%s", host, port);
});
