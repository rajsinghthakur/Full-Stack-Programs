import fs from "fs";

let redstream = fs.createReadStream("./raj.txt");

// data, end, err

let data = "";
redstream.on("data", (filedata) => { data = data + filedata; });

redstream.on("end", () => { console.log("data end......."); console.log(data); });

redstream.on("error", (err) => { console.log(err) });