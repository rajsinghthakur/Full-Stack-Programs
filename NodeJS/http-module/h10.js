import http from "http";

import url, { fileURLToPath } from "url";

import fs from "fs";

import path from "path";

http.createServer((request, responce) => {

    let parsedurl = url.parse(request.url, true);
    let filename = fileURLToPath(import.meta.url);
    let dirname = path.dirname(filename);

    if (parsedurl.pathname == "/") {
        let testFilePath = path.join(dirname + "/test.html");
        let fileContent = fs.readFileSync(testFilePath);
        responce.write(fileContent);
    }
    else if (parsedurl.pathname.match(".\css")) {
        let cssFilePath = path.join(dirname + parsedurl.pathname);
        let fileContent = fs.readFileSync(cssFilePath);
        responce.write(fileContent);
    }
    responce.end();

}).listen(3000, () => { console.log("server started") });