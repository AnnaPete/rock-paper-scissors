// DOM Elements go here
var changeGameButton = document.querySelector(".change-game-button");
var classicGameButton = document.querySelector(".classic-game-button");
var difficultGameButton = document.querySelector(".difficult-game-button");
var howToPlayButton = document.querySelector(".how-to-play");
var classicGame = document.querySelector(".classic-game-container");
var difficultGame = document.querySelector(".difficult-game-container");
var directions = document.querySelector(".instructions")

//Global variables here
var gameType = "";
var rock = "rock";
var paper = "paper";
var scissors = "scissors";
var lizard = "lizard";
var spock = "spock";
var classicChoices = [rock, paper, scissors];
var difficultChoices = [rock, paper, scissors, lizard, spock];
var choiceArray = "";
var classicWinner = "";
var difficultWinner = "";

// Event Listeners go here
// changeGameButton.addEventHandler("click", goHome);
classicGameButton.addEventListener("click", displayClassicGame);
difficultGameButton.addEventListener("click", displayDifficultGame);
howToPlayButton.addEventListener("click", showRules)

// Event Handlers go here
// goHome() {
// 
// };

function displayClassicGame() {
    classicGame.classList.remove("hidden");
    classicGameButton.classList.add("hidden");
    difficultGameButton.classList.add("hidden");
    howToPlayButton.classList.add("hidden");
};

function displayDifficultGame() {
    difficultGame.classList.remove("hidden");
    classicGameButton.classList.add("hidden");
    difficultGameButton.classList.add("hidden");
};

function showRules() {
    directions.classList.remove("hidden");
    classicGameButton.classList.add("hidden");
    difficultGameButton.classList.add("hidden");
}

// function goHome() {
// 
// }

// Other functions go here
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

//function chooseClassicWinner()
//function chooseDifficultWinner()