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
body #myid{
  width: 500px;
  height: 300px;
  display: flex;
  background-color: rgb(255, 0, 0);
}

body #c1{
  width: 100px;
  height: 100px;
  background-color: rgb(0, 255, 0);
}
    </style>
</head>
<div id="myid">
  <div id="c1" />
</div>
<body>
`
        );
      });
  })
  .listen(8088, "127.0.0.1");

console.log("server started");
