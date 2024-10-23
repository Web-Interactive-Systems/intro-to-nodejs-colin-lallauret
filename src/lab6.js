/**
 Todo: Complete this lab 

 - Explore node `http` module
 - Create an http server on the port 3000
 - Create a handler of 
    - '/' req that serves to the client the following:
        A text: Hello, this is http node module 
        And a link: <a href="/">Dashbaoard -></a> 
    - '/dashboard' that serves to the client the following: 
        <h1>Dashbaoard</h1>
        <main>Basic routing using node http server</main>
        <a href="/">back home</a>
 
 */

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(`
      <p>Hello, this is http node module</p>
      <a href="/dashboard">Dashboard -></a>
    `);
  } else if (req.url === "/dashboard") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <h1>Dashboard</h1>
      <main>Basic routing using node http server</main>
      <a href="/">back home</a>
    `);
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
