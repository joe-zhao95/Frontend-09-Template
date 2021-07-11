let http = require("http");
let unzipper = require("unzipper");
let fs = require("fs");

http
  .createServer((request, response) => {
    // let outFile = fs.createWriteStream("../server/public/index.html");
    // request.on("data", (chunk) => {
    //   outFile.write(chunk);
    // });
    // request.on("end", (chunk) => {
    //   outFile.end();
    //   response.end("Success");
    // });
    // request.pipe(outFile);
    request.pipe(unzipper.Extract({ path: "../server/public/" }));
  })
  .listen(8082);
