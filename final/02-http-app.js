// console.log('Express Tutorial')
const http = require("http");
const { readFileSync } = require("fs");

const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeImage = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");
// only req once

const server = http.createServer((req, res) => {
  // console.log(req.method)
  const url = req.url;
  // HOME page
  if (url === "/") {
    // this return the object which is server
    res.writeHead(200, { "content-type": "text/html" });

    res.write(homePage);
    res.end();
  }
   else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });

    res.write(homeStyles);
    res.end();
  }
   else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });

    res.write(homeImage);
    res.end();
  }
   else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });

    res.write(homeLogic);
    res.end();
  }
  //   404
else {
    res.writeHead(404, { "content-type": "text/html" });

    res.write("<h1>Resource is not available</h1>");
    res.end();
  }

});
// server is object
server.listen(3000);
// .listen is the method of server object
