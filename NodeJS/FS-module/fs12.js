import fs from "fs";

try {
    let redstream = fs.createReadStream("data.txt");
    let writestream = fs.createWriteStream("abc.txt", { flags: "a" });

    redstream.pipe(writestream);
    console.log("operation successfuly");
} catch (error) {
    console.log(error)
}