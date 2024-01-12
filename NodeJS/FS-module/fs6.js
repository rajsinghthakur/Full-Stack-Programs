import fs from "fs";

import pS from "prompt-sync";

var p = pS();

fs.readFile("./test.txt", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log("enter data")
        var string = p();
        if (data.includes(string)) {
            console.log("data is alredy exist in file");
        } else {
            fs.appendFile("./test.txt", "\n" + string, (err) => { err ? console.log(err) : console.log("operation successfuly") });
        }
    }
});