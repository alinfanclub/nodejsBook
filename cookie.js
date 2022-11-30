const http = require("http");
http
  .createServer((req, res) => {
    console.log(req.url, req.headers.cookie);
    res.writeHead(200, { "Set-Cookie": "mycookie=test" });
    res.end("hello cookie");
  })
  .listen(5000, () => {
    console.log("running on 5000 port");
  });
