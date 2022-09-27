class Player {
    constructor(name, icon, choice) {
        this.name = name;
        this.icon = icon;
        this.choice = choice;
        this.wins = 0
    };
    takeTurn(choiceArray, playerChoice) {
        if (this.name === "Human") { 
            this.choice = playerChoice;
        } else if (this.name === "Computer") { 
            var randomIndex = Math.floor(Math.random() * choiceArray.length);
            var randomChoice = choiceArray[randomIndex];
            this.choice = randomChoice;
        };
    };
};
