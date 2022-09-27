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
var humanWins = document.querySelector(".human-win-counter");
var computerWins = document.querySelector(".computer-win-counter");
var winnerMsg = document.querySelector(".winner-announcement");

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
var player1 = "Human";
var player2 = "Computer";

// Event Listeners go here
changeGameButton.addEventListener("click", goHome);
classicGameButton.addEventListener("click", displayClassicGame);
difficultGameButton.addEventListener("click", displayDifficultGame);
howToPlayButton.addEventListener("click", showRules)
goBackButton.addEventListener("click", hideInstructions)
rock.addEventListener("click", chooseClassicWinner)
paper.addEventListener("click", chooseClassicWinner)
scissors.addEventListener("click", chooseClassicWinner)
rock.addEventListener("click", chooseDifficultWinner)
paper.addEventListener("click", chooseDifficultWinner)
scissors.addEventListener("click", chooseDifficultWinner)
lizard.addEventListener("click", chooseDifficultWinner)
spock.addEventListener("click", chooseDifficultWinner)

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

function playClassicGame(event) {
  if (event.target === rock) {
    playerChoice = rock;
  } else if (event.target === paper) {
    playerChoice = paper;
  } else if (event.target === scissors) {
    playerChoice = scissors;
  };
};

function playDifficultGame(event) {
  if (event.target === rock) {
    playerChoice = rock;
  } else if (event.target === paper) {
    playerChoice = paper;
  } else if (event.target === scissors) {
    playerChoice = scissors;
  } else if (event.target === lizard) {
    playerChoice = lizard;
  } else if (event.target === spock) {
    playerChoice = spock;
  }
};

function chooseClassicWinner() {
  if (player1.choice === rock && player2.choice === paper) {
    computerWins.innerText = "Wins: " + 1;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Computer wins!";
  } else if (player1.choice === paper && player2.choice === scissors) {
    computerWins.innerText = "Wins: " + 1;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Computer wins!";
  } else if (player1.choice === scissors && player2.choice === rock) {
    computerWins.innerText = "Wins: " + 1;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Computer wins!";
  } else if (player1.choice === rock && player2.choice === scissors) {
    humanWins.innerText = "Wins: " + 1;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Human wins!";
  } else if (player1.choice === paper && player2.choice === rock) {
    humanWins.innerText = "Wins: " + 1;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Human wins!";
  } else if (player1.choice === scissors && player2.choice === paper) {
    humanWins.innerText = "Wins: " + 1;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Human wins!";
  } else if (player1.choice === player2.choice) {
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "It's a draw! No one wins this round 👿";
  };
};

function chooseDifficultWinner() {
  if (player1.choice === rock && player2.choice === paper) {
    computerWins.innerText = "Wins: " + 1;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Computer wins!";
  } else if (player1.choice === paper && player2.choice === rock) {
    humanWins.innerText = "Wins: " + 1;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Human wins!";
  }else if (player1.choice === paper && player2.choice === scissors) {
    computerWins.innerText = "Wins: " + 1;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Computer wins!";
  } else if (player1.choice === scissors && player2.choice === paper) {
    humanWins.innerText = "Wins: " + 1;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Human wins!";
  } else if (player1.choice === lizard && player2.choice === scissors) {
    computerWins.innerText = "Wins: " + 1;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Computer wins!";
  } else if (player1.choice === spock && player2.choice === rock) {
    humanWins.innerText = "Wins: " + 1;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Human wins!";
  } else if (player1.choice === scissors && player2.choice === lizard) {
    humanWins.innerText = "Wins: " + 1;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Human wins!";
  } else if (player1.choice === rock && player2.choice === scissors) {
    humanWins.innerText = "Wins: " + 1;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Human wins!";
  } else if (player1.choice === scissors && player2.choice === rock) {
    computerWins.innerText = "Wins: " + 1;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Computer wins!";
  }else if (player1.choice === lizard && player2.choice === spock) {
    computerWins.innerText = "Wins: " + 1;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Computer wins!";
  } else if (player1.choice === lizard && player2.choice === rock) {
    computerWins.innerText = "Wins: " + 1;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Computer wins!";
  } else if (player1.choice === spock && player2.choice === scissors) {
    humanWins.innerText = "Wins: " + 1;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Human wins!";
  } else if (player1.choice === rock && player2.choice === lizard) {
    humanWins.innerText = "Wins: " + 1;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Human wins!";
  } else if (player1.choice === spock && player2.choice === lizard) {
    computerWins.innerText = "Wins: " + 1;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Computer wins!";
  } else if (player1.choice === rock && player2.choice === spock) {
    computerWins.innerText = "Wins: " + 1;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Computer wins!";
  } else if (player1.choice === paper && player2.choice === spock) {
    humanWins.innerText = "Wins: " + 1;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Human wins!";
  } else if (player1.choice === spock && player2.choice === paper) {
    computerWins.innerText = "Wins: " + 1;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Computer wins!";
  } else if (player1.choice === paper && player2.choice === lizard) {
    computerWins.innerText = "Wins: " + 1;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Computer wins!";
  } else if (player1.choice === lizard && player2.choice === paper) {
    humanWins.innerText = "Wins: " + 1;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Human wins!";
  } else if (player1.choice === scissors && player2.choice === spock) {
    computerWins.innerText = "Wins: " + 1;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Computer wins!";
  } else if (player1.choice === player2.choice) {
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "It's a draw! No one wins this round 👿";
  }
}

// Other functions go here
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

