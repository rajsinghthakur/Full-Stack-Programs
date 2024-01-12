import express from 'express';

const server = express();

server.get("/", (req, res) => { res.send("hello") });

server.listen(3000, () => { console.log("server stated") });