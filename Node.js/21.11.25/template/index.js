const express = require("express");
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');        //왼쪽 views 를 오른쪽 views 폴더에 연결한다는 의미

const host = '127.0.0.1';
const port = 3000;

app.get('/firsttemp', (req, res) => {
  res.render('firstview');
});

app.get('/dynamic2_view', (req, res) => {
  res.render('dynamic2', {
    name:"Apple home page",
    url:"https://www.apple.com/"
  });
});

app.get('/hi', (req, res) => {
  res.render('hifriend', {
    user : {name: "Michael", age: 20}
  });
});

app.get('/components', (req, res) => {
  res.render('content');
});

app.listen(port, host, () => {
  console.log(`Index application running at http://${host}:${port}`)
});