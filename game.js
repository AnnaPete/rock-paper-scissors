var gameType = "";
var rock = "rock";
var paper = "paper";
var scissors = "scissors";
var classicChoices = [rock, paper, scissors];
var difficultChoices = [rock, paper, scissors, lizard, spock];
var choiceArray = "";

class Game {
    constructor(gameType) {
        this.gameType = gameType;
        this.player1 = new Player("Human", "👤");
        this.player2 = new Player("Computer", "🖥");
        this.player1Choice = this.player1.choice;
        this.player2Choice = this.player2.choice;
        this.fighters = [this.player1Choice, this.player2Choice];
        this.winner = "";
    };
    findGameType() {
        if (this.gameType === "classic") {
            chooseClassicWinner();
        }else if (this.gameType === "difficult") {
            chooseDifficultWinner();
        };
    };
};

function chooseGameType(type) {
    choiceArray = "";
    if (gameType === type) {
        choiceArray = classicChoices;
    } else {
        choiceArray = difficultChoices;
    };
};