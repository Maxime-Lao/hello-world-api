/*
* An Hello World Restful JSON API built with NodeJS alone.
* When a POST request is sent to this API, it responds with an "Hello World!" message.
*/

const http = require('http');

const server = http.createServer((req, res) => {
  const method = req.method.toUpperCase();
  res.setHeader('Content-Type', 'application/json');
  res.writeHead(200, 'request is good');
  if (method === 'GET') {
    const response = JSON.stringify({ message: 'Maxime Lao et Muthulan Mohanadas 5IW2 Groupe 7 !' });
    res.end(response);
  } else {
    const response = JSON.stringify({ message: 'You need to send a get request to get the appropriate response' });
    res.end(response);
  }
});

server.listen(8000, () => {
  console.log('App started on port 8000');
});