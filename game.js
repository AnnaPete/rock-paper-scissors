
class Game {
    constructor(gameChoices) {
        this.gameChoices = gameChoices;
        this.player1 = new Player("Human", "👤");
        this.player2 = new Player("Computer", "🖥");
        this.player1Choice = this.player1.choice;
        this.player2Choice = this.player2.choice;
        this.fighters = [this.player1Choice, this.player2Choice];
        this.winner = "";
    };
};
