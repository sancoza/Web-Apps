const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const requestHandler = (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/user') {
    res.statusCode = 200;
    res.end(JSON.stringify({ name: 'John', age: 30, city: 'New York' }));
    return;
  }

  if (req.url === '/shows') {
    res.statusCode = 200;
    res.end(
      JSON.stringify([
        { name: 'Game of Thrones', rating: 9.5 },
        { name: 'Breaking Bad', rating: 9.8 },
      ])
    );
    return;
  }

  if (req.url === '/posts') {
    res.statusCode = 200;
    res.end(
      JSON.stringify([
        { title: 'Post 1', body: 'Post 1 body' },
        { title: 'Post 2', body: 'Post 2 body' },
      ])
    );
    return;
  }

  res.statusCode = 404;
  res.end(JSON.stringify({ error: 'Not found' }));
};

const server = http.createServer(requestHandler);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});