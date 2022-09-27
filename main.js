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
var rock1 = document.querySelector(".rock-classic");
var paper1 = document.querySelector(".paper-classic");
var scissors1 = document.querySelector(".scissors-classic");
var rock2 = document.querySelector(".rock-difficult");
var paper2 = document.querySelector(".paper-difficult");
var scissors2 = document.querySelector(".scissors-difficult");
var lizard = document.querySelector(".lizard");
var spock = document.querySelector(".spock");

//Global variables here
var gameType = "";
var playerChoice;
var classicChoices = [rock1, paper1, scissors1];
var difficultChoices = [rock2, paper2, scissors2, lizard, spock];
var player1 = new Player("Human", "💪");
var player2 = new Player("Computer", "🖥");

// Event Listeners go here
changeGameButton.addEventListener("click", goHome);
classicGameButton.addEventListener("click", displayClassicGame);
difficultGameButton.addEventListener("click", displayDifficultGame);
howToPlayButton.addEventListener("click", showRules);
goBackButton.addEventListener("click", hideInstructions);
rock1.addEventListener("click", chooseClassicWinner);
paper1.addEventListener("click", chooseClassicWinner);
scissors1.addEventListener("click", chooseClassicWinner);
rock2.addEventListener("click", chooseDifficultWinner);
paper2.addEventListener("click", chooseDifficultWinner);
scissors2.addEventListener("click", chooseDifficultWinner);
lizard.addEventListener("click", chooseDifficultWinner);
spock.addEventListener("click", chooseDifficultWinner);

// Event Handlers go here
function displayClassicGame() {
  classicGame.classList.remove("hidden");
  classicGameButton.classList.add("hidden");
  difficultGameButton.classList.add("hidden");
  howToPlayButton.classList.add("hidden");
  winnerMsg.classList.add("hidden");
};

function displayDifficultGame() {
  difficultGame.classList.remove("hidden");
  classicGameButton.classList.add("hidden");
  difficultGameButton.classList.add("hidden");
  winnerMsg.classList.add("hidden");
};

function showRules() {
  directions.classList.remove("hidden");
  howToPlayButton.classList.add("hidden");
  classicGameButton.classList.add("hidden");
  difficultGameButton.classList.add("hidden");
}

function hideInstructions() {
  directions.classList.add("hidden");
  howToPlayButton.classList.remove("hidden");
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
  if (event.target.classList.contains("rock1")) {
    player1.choice = rock1;
  } else if (event.target.classList.contains("paper1")) {
    player1.choice = paper1;
  } else if (event.target.classList.contains("scissors1")) {
    player1.choice = scissors1;
  };
};

function playDifficultGame(event) {
  if (event.target.classList.contains("rock2")) {
    player1.choice = rock2;
  } else if (event.target.classList.contains("paper2")) {
    player1.choice = paper2;
  } else if (event.target.classList.contains("scissors2")) {
    player1.choice = scissors2;
  } else if (event.target.classList.contains("lizard")) {
    player1.choice = lizard;
  } else if (event.target.classList.contains("spock")) {
    player1.choice = spock;
  }
};

function chooseClassicWinner(event) {
  playClassicGame(event)
  player1.takeTurn(classicChoices, player1.choice);
  player2.takeTurn(classicChoices, player2.choice);
  if (player1.choice === rock1 && player2.choice === paper1) {
    player2.wins += 1;
    computerWins.innerText = "Wins: " + player2.wins;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Computer wins!";
  } else if (player1.choice === paper1 && player2.choice === scissors1) {
    player2.wins += 1;
    computerWins.innerText = "Wins: " + player2.wins;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Computer wins!";
  } else if (player1.choice === scissors1 && player2.choice === rock1) {
    player2.wins += 1;
    computerWins.innerText = "Wins: " + player2.wins;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Computer wins!";
  } else if (player1.choice === rock1 && player2.choice === scissors1) {
    player1.wins += 1;
    humanWins.innerText = "Wins: " + player1.wins;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Human wins!";
  } else if (player1.choice === paper1 && player2.choice === rock1) {
    player1.wins += 1;
    humanWins.innerText = "Wins: " + player1.wins;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Human wins!";
  } else if (player1.choice === scissors1 && player2.choice === paper1) {
    player1.wins += 1;
    humanWins.innerText = "Wins: " + player1.wins;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Human wins!";
  } else if (player1.choice === player2.choice) {
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "It's a draw! No one wins this round 👿";
  };
  setTimeout(displayClassicGame, 1000);
};

function chooseDifficultWinner(event) {
  playDifficultGame(event)
  player1.takeTurn(difficultChoices, player1.choice);
  player2.takeTurn(difficultChoices, player2.choice);
  if (player1.choice === rock2 && player2.choice === paper2) {
    player2.wins += 1;
    computerWins.innerText = "Wins: " + player2.wins;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Computer wins!";
  } else if (player1.choice === paper2 && player2.choice === rock2) {
    player1.wins += 1;
    humanWins.innerText = "Wins: " + player1.wins;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Human wins!";
  }else if (player1.choice === paper2 && player2.choice === scissors2) {
    player2.wins += 1;
    computerWins.innerText = "Wins: " + player2.wins;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Computer wins!";
  } else if (player1.choice === scissors2 && player2.choice === paper2) {
    player1.wins += 1;
    humanWins.innerText = "Wins: " + player1.wins;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Human wins!";
  } else if (player1.choice === lizard && player2.choice === scissors2) {
    player2.wins += 1;
    computerWins.innerText = "Wins: " + player2.wins;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Computer wins!";
  } else if (player1.choice === spock && player2.choice === rock2) {
    player1.wins += 1;
    humanWins.innerText = "Wins: " + player1.wins;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Human wins!";
  } else if (player1.choice === scissors2 && player2.choice === lizard) {
    player1.wins += 1;
    humanWins.innerText = "Wins: " + player1.wins;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Human wins!";
  } else if (player1.choice === rock2 && player2.choice === scissors2) {
    player1.wins += 1;
    humanWins.innerText = "Wins: " + player1.wins;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Human wins!";
  } else if (player1.choice === scissors2 && player2.choice === rock2) {
    player2.wins += 1;
    computerWins.innerText = "Wins: " + player2.wins;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Computer wins!";
  }else if (player1.choice === lizard && player2.choice === spock) {
    computerWins.innerText = "Wins: " + 1;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Computer wins!";
  } else if (player1.choice === lizard && player2.choice === rock2) {
    player2.wins += 1;
    computerWins.innerText = "Wins: " + player2.wins;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Computer wins!";
  } else if (player1.choice === spock && player2.choice === scissors2) {
    player1.wins += 1;
    humanWins.innerText = "Wins: " + player1.wins;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Human wins!";
  } else if (player1.choice === rock2 && player2.choice === lizard) {
    player1.wins += 1;
    humanWins.innerText = "Wins: " + player1.wins;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Human wins!";
  } else if (player1.choice === spock && player2.choice === lizard) {
    player2.wins += 1;
    computerWins.innerText = "Wins: " + player2.wins;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Computer wins!";
  } else if (player1.choice === rock2 && player2.choice === spock) {
    player2.wins += 1;
    computerWins.innerText = "Wins: " + player2.wins;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Computer wins!";
  } else if (player1.choice === paper2 && player2.choice === spock) {
    player1.wins += 1;
    humanWins.innerText = "Wins: " + player1.wins;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Human wins!";
  } else if (player1.choice === spock && player2.choice === paper2) {
    player2.wins += 1;
    computerWins.innerText = "Wins: " + player2.wins;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Computer wins!";
  } else if (player1.choice === paper2 && player2.choice === lizard) {
    player2.wins += 1;
    computerWins.innerText = "Wins: " + player2.wins;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Computer wins!";
  } else if (player1.choice === lizard && player2.choice === paper2) {
    player1.wins += 1;
    humanWins.innerText = "Wins: " + player1.wins;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Human wins!";
  } else if (player1.choice === scissors2 && player2.choice === spock) {
    player2.wins += 1;
    computerWins.innerText = "Wins: " + player2.wins;
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "Computer wins!";
  } else if (player1.choice === player2.choice) {
    winnerMsg.classList.remove("hidden");
    winnerMsg.innerText = "It's a draw! No one wins this round 👿";
  };
  setTimeout(displayDifficultGame, 1000);
}