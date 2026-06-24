const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log("HTTP Version:", req.httpVersion);
  console.log("URL:", req.url);
  console.log("Method:", req.method);
  console.log("Headers:", req.headers);

  res.end("Request received successfully!");
});

server.listen(8000, () => {
  console.log("Server running at http://localhost:8000");
});