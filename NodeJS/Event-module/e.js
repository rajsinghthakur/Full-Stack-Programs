import event from 'events';

var raj = new event.EventEmitter();

raj.on("raj",()=>{console.log("Raj Thakur")});

raj.emit("raj");