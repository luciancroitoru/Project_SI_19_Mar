class Game {

    constructor(rounds){
        this.players = [];
        this.currentRound = 0;
        this.rounds = rounds;
    }

    addPlayer(newPlayer){
        console.log(`new player entered the game`);
        this.players.push(newPlayer)
    }

    newRound(){
        this.players.forEach(p => p.move());
    }

    playGame(){
        for (this.currentRound = 1; this.currentRound <= this.rounds; this.currentRound++) {
            this.newRound();
        }
    }

    showResults(){
        this.players
            .sort((playerA, playerB) => playerA.distance - playerB.distance)
            .forEach(player => console.log(player));
    }
}