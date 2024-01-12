import http from "http";

import url from "url";

const server = http.createServer((req, res) => {
    
    // console.log(req.url);
    let parsedurl = url.parse(req.url, true);
    // console.log(parsedurl);
    // console.log(parsedurl.pathname);
    // console.log(parsedurl.query);
    // console.log(parsedurl.query.a);
    let a = parsedurl.query.a * 1;
    let b = parsedurl.query.b * 1;
    if ((parsedurl.pathname == "/") || (parsedurl.pathname == "/home")) {
        res.write("<h1>Home</h1>")
    } else if (parsedurl.pathname == "/add") {
        res.write("<h1>Addition : " + (a + b) + "</h1>")
    }
    res.end();
});

server.listen(3000, () => { console.log("server started") });