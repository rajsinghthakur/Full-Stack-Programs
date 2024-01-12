import express from "express";

const server = express();

server.get("/home", (req, res, next) => { res.send("home page") });

server.get("/about", (req, res, next) => {
    res.write("about page");
    res.end();
});

server.post("/contect", (req, res, next) => { res.send("home page") });

server.post("/contect", (req, res, next) => { res.send("home page") });

server.post("/number", (req, res, next) => {
    res.write("about page");
    res.end();
});

server.listen(3000, () => { console.log("server started") });