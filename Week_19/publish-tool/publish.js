let http = require("http");
let fs = require("fs");
let archiver = require("archiver");

fs.stat("./sample.html", (err, stats) => {
  let request = http.request(
    {
      hostname: "127.0.0.1",
      port: 8082,
      method: "POST",
      headers: {
        "Content-Type": "application/Octet-stream",
        "Content-Length": stats.size,
      },
    },
    (response) => {}
  );

  let file = fs.createReadStream("./sample.html");
  // file.on("data", (chunk) => {
  //   request.write(chunk);
  // });

  // file.on("end", (chunk) => {
  //   request.end(chunk);
  // });

  // file.pipe(request);

  // file.on("end", () => {
  //   request.end();
  // });

  const archive = archiver("zip", {
    zlib: { level: 9 },
  });
  archive.directory("./sample/", false);
  archive.finalize();
  archive.pipe(request);
});
