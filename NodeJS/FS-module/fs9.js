import fs from "fs";

fs.readFile("data.txt", "utf8", (err1, data1) => {
    if (!err1) {
        fs.readFile("test.txt", "utf8", (err2, data2) => {
            if (!err2) {
                try {
                    fs.writeFileSync("newfile.txt", data1 + "\n" + data2);
                    console.log("operation successful");
                } catch (error) {
                    console.log(error);
                }
            } else {
                console.log(err2);
            }
        });
    }
});