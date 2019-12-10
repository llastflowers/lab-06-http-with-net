const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());

    if (request.method === 'GET' && request.path === '/') {
      socket.end(createResponse({ body: 'hi' }));
    }
    if (request.method === 'POST' && request.path === '/echo') {
      socket.end(createResponse({ body: request.body, contentType: 'text/plain', status: 200 }));
    }
    socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
  });
});

module.exports = app;

  // /	GET	plain text "hi"
  // /echo	POST	status code 200 and plain text with the request body
  // /red	GET	html with an h1 and the word red
  // /green	GET	html with an h1 and the word green
  // /blue	GET	html with an h1 and the word blue
  // Everything else respond with 404 and a not found HTML page.