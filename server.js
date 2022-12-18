const http = require("http");
const port = 8081;

http
    .createServer((req, res) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h4>This is my first server created</h4>");
        res.end();
    })
    .listen(port, () => {
        console.log('Node.js server started on port ${port}');
    });

// In package.JSON file "dev" : "nodemon server.js" is added to run the server automatically when changes are made in the file 

// In Network under inspect on the UI favicon.ico is like font-awsome which take the request for icon over the tab if if i.e. globe icon 
