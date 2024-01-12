import http from "http";

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.write("Home")
    }
    res.end();
});

server.listen(3000, () => { console.log("server started") })