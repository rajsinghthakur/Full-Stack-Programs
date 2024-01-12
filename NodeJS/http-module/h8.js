import http from "http";

import url from "url";

const server = http.createServer((req, res) => {

    const parseurl = url.parse(req.url, true)

    console.log(parseurl.pathname);
    console.log(parseurl.query);
    let a = (parseurl.query.a)*1;
    let b = (parseurl.query.b)*1;

    if (parseurl.pathname == "/add") {
        res.write("<h1>Addition : " + (a + b) + "</h1>");
    }
    res.end();
});

server.listen(3000, () => { console.log("server startd") });