import http from "http";

import url from "url";

const server = http.createServer((request, responce) => {

    let parseurl = url.parse(request.url, true);

    let x = 5;
    let y = 5;

    responce.write('<h1><button onclick="click()"><a href="http://localhost:3000/add?a=' + x + '&b=' + y + '">Addition</a></button><br><button onclick="click()"><a href="http://localhost:3000/sub?a=' + x + '&b=' + y + '">Subtraction</a></button><br><button onclick="click()"><a href="http://localhost:3000/mul?a=' + x + '&b=' + y + '">Multiplication</a></button><br><button onclick="click()"><a href="http://localhost:3000/div?a=' + x + '&b=' + y + '">Division</a></button><br></h1>');

    let a = parseurl.query.a * 1;
    let b = parseurl.query.b * 1;

    if (parseurl.pathname == "/add") {
        responce.write("<h1>Addition : " + (a + b) + "</h1>");
    } else if (parseurl.pathname == "/sub") {
        responce.write("<h1>Subtraction : " + (a - b) + "</h1>");
    } else if (parseurl.pathname == "/mul") {
        responce.write("<h1>Multiplication : " + (a * b) + "</h1>");
    } else if (parseurl.pathname == "/div") {
        responce.write("<h1>Division : " + (a / b) + "</h1>");
    }
    responce.end();
});

server.listen(3000, () => { console.log("Server Started") });