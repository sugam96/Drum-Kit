document.addEventListener("keydown", function (event) {
    clickAnimations(event.key);
    soundPlayer(event.key);
});
var buttons = document.querySelectorAll(".drum");
var numberOfButtons = document.querySelectorAll(".drum").length;
for (let index = 0; index < numberOfButtons; index++) {
    buttons[index].addEventListener("click", clickHandler);
}

function clickHandler() {
    var button = this.innerHTML;
    clickAnimations(button);
    soundPlayer(button)
}

function soundPlayer(key){
    switch (key){
        case 'w':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case 'a':
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case 's':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case 'd':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case 'j':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case 'k':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case 'l':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            break;
    }
}

function clickAnimations(key) {
    var varClass = "."+key;
    var activeButton = document.querySelector(varClass);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);

}
