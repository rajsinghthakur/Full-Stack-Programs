import fs from "fs";

fs.appendFile("./test.txt", "\nnode.js is very simple", (err) => { err ? console.log(err) : console.log("operation successfuly.......") });