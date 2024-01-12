import fs from "fs";

console.log("At the start......")

fs.readFile("./data.txt", (err, data) => { err ? console.log(err) : console.log(data.toString()) });

console.log("At the end......")