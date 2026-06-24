const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log("New request received!");

  res.writeHead(200);
  res.end("Hello from Node.js Server");
});

server.listen(8000, () => {
  console.log("Server running at http://localhost:8000");
});