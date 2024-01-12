import fs from "fs";

console.log("At the start......")

fs.writeFile("./data.txt", "node.js is not a programing language", (err) => { err ? console.log(err) : console.log("operation succed") });

console.log("At the end......")