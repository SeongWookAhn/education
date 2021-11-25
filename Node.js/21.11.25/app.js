const express = require("express");
const app = express();

const port = 3000;
const host = '127.0.0.1';

app.get('/:id', (req, res) => {   // :id 에서 :이 빠지면 에러뜸
  res.send("The id is : " + req.params.id);
});

app.get('/hello/:name/:id', (req, res) => {
  res.send('id : ' + req.params.id + ' name : ' + req.params.name);
});

app.get('/helloworld/:id([0-9]{5})/:name([a-z]{5})', (req, res) => {
  res.send('id: ' + req.params.id + ' name: ' + req.params.name);
});

app.listen(port, host, () => {
  console.log(`Application server running at http://${host}:${port}`);
});