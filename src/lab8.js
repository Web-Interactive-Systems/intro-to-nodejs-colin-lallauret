const { writeFileSync } = require("fs");
const http = require("http");
const fs = require("fs");
/**
 Todo: Follow the todos in this file to complete it
 */

// Todo run this code only once to generate a big file
// --
// Generate a big file using `writeFileSync`
// Array.from({ length: 100000 }, (_, i) => {
//   writeFileSync(
//     __dirname + "/utils/big.txt",
//     `This will be a big text file ${i}\n`,
//     {
//       flag: "a",
//     }
//   ); // flag: "a" for appending
// });

// Todo create an http server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

// Todo: serve text to the client.

// Todo: What's the problem?

// Todo: use `createReadStream` to file stream to serve text to the client.
