const http = require("http");

http
  .createServer((repuest, response) => {
    let body = [];
    repuest
      .on("error", (error) => {
        console.log(error);
      })
      .on("data", (chunk) => {
        body.push(chunk.toString());
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        console.log("body:", body);
        response.writeHead(200, { "Content-Type": "text/html" });
        res.end("Hello World\n");
      });
  })
  .listen(8088);

console.log("server started");
