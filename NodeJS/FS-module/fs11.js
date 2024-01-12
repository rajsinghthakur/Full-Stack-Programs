import fs from "fs";

var writestream = fs.createWriteStream("abc.txt");

writestream.write("Hello node");
writestream.end();

writestream.on("finish", () => { console.log("operation success") });

writestream.on("error", (err) => { console.log(err) });