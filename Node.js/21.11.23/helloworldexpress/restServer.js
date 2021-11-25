const http = require('http');
const fs = require('fs').promises;

const host = '127.0.0.1';
const port = 3000;

const users = {};

var server = http.createServer(async (req, res) => {
  try {
    if(req.method === 'GET') {
      if(req.url === '/') {
        const data = await fs.readFile('./restfront.html');
        res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
        return res.end(data);
      } else if(req.url === 'about') {
        const data = await fs.readFile('./about.html');
        res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
        return res.end(data);
      } else if(req.url === '/users') {
        res.writeHead(200, {'Content-Type' : 'application/json; charset=utf-8'});
        return res.end(JSON.stringify(users));
      }

      try {
        const data = await fs.readFile(`.${req.url}`);
        return res.end(data);
      } catch(err) {
        res.writeHead(404, {'Content-Type' : 'text/html; charset=utf-8'});
        return res.end(err.message);
      }
    }
    else if(req.method === 'POST') {
      if(req.url === '/user') {
        let body = '';
        //  request body -> stream
        req.on('data', (data) => {
          body += data;
        });
        // body after down execute
        return req.on('end', (data) => {
          console.log('POST body:', body);
          const { name } = JSON.parse(body);
          const id = Date.now();
          users[id] = name;
          res.writeHead(201, {'Content-Type' : 'text/html; charset=utf-8'});
          res.end('ok');
        });
      }
    }
    else if(req. method === 'PUT') {
      if(req.url.startsWith('/user/')) {
        const key = req.url.split('/')[2];
        let body = '';
        req.on('data', (data) => {
          body += data;
        });
        return req.on('end', () => {
          console.log('PUT body:', body);
          users[key] = JSON.parse(body).name;
          res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
          return res.end('ok');
        });
      }
    }
    else if(req.method === 'DELETE') {
      if(req.url.startsWith('/user/')) {
        const key = req.url.split('/')[2];
        delete users[key];
        res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
        return res.end('ok');
      }
    }
    res.writeHead(404);
    return res.end('NOT FOUND');
  } catch(err) {
    console.error(err);
    res.writeHead(500, {'Content-Type' : 'text/html; charset=utf-8'});
    res.end(err.message)
  }
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});