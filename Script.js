// Initial setup
var numCircles = 6;
var colours = [];
var pickedColor;
let defaultColour = "#582c99";

var circles = document.querySelectorAll(".circle");
var colourToGuess = document.getElementById("colour-to-guess");
var resultMessage = document.getElementById("result-message");
var banner = document.querySelector("h1");
var resetButton = document.getElementById("restart");

init();

function init() {
    reset();
    colourToGuess.textContent = pickedColor; 
    setupCircles();
    resetButton.addEventListener("click", reset); 
}

function setupCircles() {
    for (var i = 0; i < circles.length; i++) {
        circles[i].addEventListener("click", clickCircle);
    }
}

function clickCircle() {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
        resultMessage.textContent = "You win!";
        resetButton.textContent = "Play again";
        changeAllCircles(pickedColor);
        banner.style.backgroundColor = pickedColor;
    } else {
        this.style.backgroundColor = defaultColour;
        resultMessage.textContent = "Try again";
    }
}

function reset() {
    colours = genRandomColours(); 
    pickedColor = chooseColor(); 
    colourToGuess.textContent = pickedColor; 
    banner.style.backgroundColor = defaultColour; 
    resultMessage.textContent = ""; 
    resetButton.textContent = "Restart"; 
    for (var i = 0; i < circles.length; i++) {
        circles[i].style.backgroundColor = colours[i];
    }
}

function changeAllCircles(color) {
    for (var i = 0; i < circles.length; i++) {
        circles[i].style.backgroundColor = color;
    }
}

function makeColour() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function genRandomColours() {
    var colors = [];
    for (var i = 0; i < numCircles; i++) {
        colors.push(makeColour());
    }
    return colors;
}

function chooseColor() {
    var randomIndex = Math.floor(Math.random() * colours.length);
    return colours[randomIndex];
}
