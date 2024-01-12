var figlet = require("figlet");
var colors = require('colors');

figlet("raj thakur", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data.rainbow);
});