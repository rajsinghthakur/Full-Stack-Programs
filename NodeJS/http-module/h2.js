import http from "http";

const server = http.createServer((request, response) => {
    if ((request.url == '/') || (request.url == '/home')) {
        response.write("<h1>Home page</h1>");
    } else if (request.url == '/about') {
        response.write("<h1>About page</h1>");
    } else if (request.url == '/contect') {
        response.write("<h1>Contect page</h1>");
    } else if (request.url == '/name') {
        response.write("<h1>Raj Thakur</h1>");
    }
    else if (request.url == '/sachin') {
        response.write("<h1>sachin</h1>");
    }
    response.end();
});

server.listen(5000, () => { console.log("server started") })