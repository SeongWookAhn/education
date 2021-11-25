const express = require("express");
const app = express();

const port = 3000;
const host = "127.0.0.1"

const routing = require('./router.js');

app.use('/router', routing); // routing을 이쪽으로 한다

app.listen(port, host, () => {
  console.log(`index server running at http://${host}:${port}`);
});