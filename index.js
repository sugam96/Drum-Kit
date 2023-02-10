var buttons = document.querySelectorAll(".drum");
var numberOfButtons = document.querySelectorAll(".drum").length;
for (let index = 0; index < numberOfButtons; index++) {
    buttons[index].addEventListener("click",clickHandler);
}

function clickHandler() {
    alert("You clicked a Button!");
}