// DOM Elements go here
var changeGameButton = document.querySelector(".change-game-button");
var classicGameButton = document.querySelector(".classic-game-button");
var difficultGameButton = document.querySelector(".difficult-game-button");
var howToPlayButton = document.querySelector(".how-to-play");
var goBackButton = document.querySelector(".go-back-button");
var classicGame = document.querySelector(".classic-game-container");
var difficultGame = document.querySelector(".difficult-game-container");
var directions = document.querySelector(".instructions");
var game = document.querySelector(".game");

//Global variables here
var gameType = "";
var rock = "rock";
var paper = "paper";
var scissors = "scissors";
var lizard = "lizard";
var spock = "spock";
var classicChoices = [rock, paper, scissors];
var difficultChoices = [rock, paper, scissors, lizard, spock];
var classicWinner = "";
var difficultWinner = "";

// Event Listeners go here
changeGameButton.addEventListener("click", goHome);
classicGameButton.addEventListener("click", displayClassicGame);
difficultGameButton.addEventListener("click", displayDifficultGame);
howToPlayButton.addEventListener("click", showRules)
goBackButton.addEventListener("click", hideInstructions)
rock.addEventListener("click", playClassicGame)
paper.addEventListener("click", playClassicGame)
scissors.addEventListener("click", playClassicGame)
rock.addEventListener("click", playDifficultGame)
paper.addEventListener("click", playDifficultGame)
scissors.addEventListener("click", playDifficultGame)
lizard.addEventListener("click", playDifficultGame)
spock.addEventListener("click", playDifficultGame)

// Event Handlers go here
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

function hideInstructions() {
  directions.classList.add("hidden");
  classicGameButton.classList.remove("hidden");
  difficultGameButton.classList.remove("hidden");
}

function goHome() {
  classicGameButton.classList.remove("hidden");
  difficultGameButton.classList.remove("hidden");
  howToPlayButton.classList.remove("hidden");
  classicGame.classList.add("hidden");
  difficultGame.classList.add("hidden");
};

function playClassicGame() {
  if (clicked === rock) {
    playerChoice = rock;
  } else if (clicked === paper) {
    playerChoice = paper;
  } else if (clicked === scissors) {
    playerChoice = scissors;
  };
};

function playDifficultGame() {
  if (clicked === rock) {
    playerChoice = rock;
  } else if (clicked === paper) {
    playerChoice = paper;
  } else if (clicked === scissors) {
    playerChoice = scissors;
  } else if (clicked === lizard) {
    playerChoice = lizard;
  } else if (clicked === spock) {
    playerChoice = spock;
  }
};

//function chooseClassicWinner() {
// 
// }

//function chooseDifficultWinner() {
// 
// }

// Other functions go here
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

