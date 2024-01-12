import fs from "fs";

let data = "node.js code is a c++ code";

try {
    fs.appendFileSync("./raj.txt", data + "\n");
    console.log("operation successfuly")
} catch (error) {
    console.log(err)
}