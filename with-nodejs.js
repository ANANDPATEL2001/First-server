const http = require("http");
const port = 8081;
const toDoList = ["Need to learn", "Need to code"];

// http methods
// get - to get the info from the server
// put - to overwrite/fully update
// patch - to have few changes 
// post - to send the info to server
// delete - to delete the info




// Creating the server
http
    .createServer((req, res) => {
        // res.writeHead(200, { "Content-Type": "text/html" });
        // res.write("<h4>This is my first server created</h4>");

        const { method, url } = req;
        // console.log({method, url});

        // Creating differnt routes
        if (url === "/") {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write("<h4>This is my first server created</h4>");
            res.end();
        }
        else if (url === "/hello") {
            if (method === "GET") {
                res.writeHead(200, { "Content-Type": "text/html" });
                // res.writeHead(200);
                res.write(toDoList.toString());
                res.write("<h4>hello world</h4>");
                res.end();
            }
            else if (method === "POST") {
                let body = "";
                req.on("error", (err) => {
                    console.log(err);
                }).on("data", (chunk) => {
                    body += chunk;
                    console.log(chunk);
                }).on("end", () => {
                    body = JSON.parse(body);
                    console.log("Body data", body);
                    let newToDo = toDoList;
                    newToDo.push(body.name);
                    console.log(newToDo);
                });
            }
            else if(method === "DELETE"){
                let body = "";
                req.on("error", (err) => {
                    console.log(err);
                }).on("data", (chunk) => {
                    body += chunk;
                    // console.log(chunk);
                }).on("end", () => {
                    body = JSON.parse(body);
                    console.log("Body data", body);
                    let deleteItem = body.name;
                    for(let i=0;i<toDoList.length;i++)
                    {
                        if(toDoList[i] === deleteItem)
                            toDoList.splice(i,1);
                            break;
                            // splice operator is used to delete certain item from the array 
                            // first argument is position of the data item to be deleted
                            // Second argument is occurence of data item to be deleted 
                    }
                });
            }
            else {
                res.writeHead(501);
            }
        }
        else {
            res.writeHead(404);
        }

        res.end();
    })
    .listen(port, () => {
        console.log(`Node.js server started on port ${port}`);
        // console.log(http.get());
    });

// In package.JSON file "dev" : "nodemon server.js" is added to run the server automatically when changes are made in the file

// In Network under inspect on the UI favicon.ico is like font-awsome which take the request for icon over the tab if if i.e. globe icon 
