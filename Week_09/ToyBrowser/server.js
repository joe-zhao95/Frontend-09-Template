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
        // body = Buffer.concat(body);
        body = body.join("");
        console.log("body:", body);
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(
          `<html maaa=a >
<head>
    <style>
body div #myid{
  width: 100px;
  background-color: red;
}

body div img{
  width: 30px;
}
    </style>
</head>
<body>
`
        );
      });
  })
  .listen(8088, "127.0.0.1");

console.log("server started");
