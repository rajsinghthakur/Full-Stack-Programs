import event from "events";

var raj = new event.EventEmitter();

raj.on("thakur", () => { console.log("Raj Thakur") });

raj.on("test", () => {
    console.log("test Succed")
}, (err) => {
    if (err)
        console.log(err)
});

raj.on("mishra", () => { console.log("chandrashekhar mishra") });

raj.emit("thakur");
raj.emit("test");
raj.emit("mishra");