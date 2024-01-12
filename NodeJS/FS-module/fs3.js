import fs from "fs";

fs.writeFile("./test.txt", "javascript is very simple", (err) => { err ? console.log(err) : console.log("operation successfuly") });