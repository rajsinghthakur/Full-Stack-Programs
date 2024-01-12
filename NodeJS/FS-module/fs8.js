import fs from "fs";

try {
    let f1 = fs.readFileSync("./data.txt");
    let f2 = fs.readFileSync("./test.txt");
    let f = (f1 + "\n" + f2)
    try {
        fs.writeFileSync("./raj.txt", f);
        console.log("operation succed");
    } catch (error) {
        console.log(error)
    }

} catch (error) {
    console.log(error)
}