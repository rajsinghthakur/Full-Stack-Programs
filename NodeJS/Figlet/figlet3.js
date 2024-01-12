import figlet from "figlet";

console.log(
  figlet.textSync("raj", {
    font: "Ghost",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 50,
    whitespaceBreak: true,
  })
);