class Player {
    constructor(name, icon) {
        this.name = name;
        this.icon = icon;
        this.choice = "";
        this.wins = 0
    };
    takeTurn(choiceArray) {
        if (this.name === "Human") { 
            var playerChoice = playerChoice;
        } else if (this.name === "Computer") { 
            var randomIndex = Math.floor(Math.random() * choiceArray.length);
            var randomChoice = choiceArray[randomIndex];
            this.choice = randomChoice;
        };
    };
};
