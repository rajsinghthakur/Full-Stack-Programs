// import http from "http";

// const server = http.createServer((request, response) => {
//     if ((request.url == '/') && (request.method == 'GET')) {
//         response.write("Home Page");
//     }
//     response.end();
// });

// server.listen(3000, () => {
//     console.log("Server Started")
// });

import http from "http";

const server = http.createServer((request, response) => {

    if ((request.url == '/')) {
        response.write("<h1>Home Page</h1>");
    }
    response.end();

});

server.listen(3000, () => { console.log("server started") });