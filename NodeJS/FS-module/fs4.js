import fs from "fs";

fs.readFile("./test.txt","utf8", (err, data) => { err ? console.log(err) : console.log(data) });