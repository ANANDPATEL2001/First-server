const express = require("express");
const port = 8081;

const toDoList = ["Need to learn", "Need to code"];

// Initialisation of express
const app = express();
app.use(express.json());

app.get("/hello", (req, res) => {
    res.status(200).send(toDoList)
});

app.post("/hello", (req, res) => {
    let newToDoItem = req.body.item;
    toDoList.push(newToDoItem);
    res.status(201).send({
        message: `${req.body.item} is successfully added`,
    });
});

app.delete("/hello", (req, res) => {
    let newToDoItem = req.body.item;
    toDoList.find((data, index) => {
        if (data === newToDoItem)
            toDoList.splice(index, 1);
    });
    res.status(201).send({
        message: `${req.body.item} is successfully deleted`,
    });
});

// Below are the general cases which need to be implemented at the last
// Below one is general case for all other methods except all stated above if implemented
app.all("/hello",(req,res) => {
    res.status(501).send();
});

// Below one is general case for all other routes(url) except all stated above if implemented
app.all("*",(req,res) => {
    res.status(404).send();
});

app.listen(port, () => {
    console.log(`Your server started at ${port}`);
});
