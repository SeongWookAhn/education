const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer();
const session = require("express-session");
const dotenv = require('dotenv').config();
const app = express();
const host = '127.0.0.1';
const port = 3000;


app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(upload.array());
app.use(cookieParser());
app.use(session({
  secure: false,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie : {
    maxAge:(1000 * 60 * 100)
  }
}));

var Users = [];

app.get('/signup', (req, res) => {
  res.render('signup', {
    message: "Hello World!!!"
  });
});

app.post('/signup', (req, res) => {
  if(!req.body.id || !req.body.address || !req.body.address_detail || !req.body.password) {    //id와 password를 안썼을 경우
    res.status("404");
    res.send("Invalid id or details!!!");
  }
  else {
    Users.filter((user) => {
      if(user.id === req.body.id) {
        res.render('signup', {
          message: "User Alread Exists! Login or choose another user id"
        });
      }
    });

    let newUser = {id: req.body.id, address: req.body.address, address_detail: req.body.address_detail, password: req.body.password};
    Users.push(newUser);
    req.session.user = newUser;
    res.redirect('/protected_page');
  }
});

app.get('/protected_page', function(req, res) {
  res.render('protected_page', {id: req.session.user.id, address: req.session.user.address, address_detail: req.session.user.address_detail})
});

app.listen(port, host, () => {
  console.log(`Application running at http://${host}:${port}`);
});

// 회원가입 폼을 만들고 주소찾기(카카오 API이용) 적용 