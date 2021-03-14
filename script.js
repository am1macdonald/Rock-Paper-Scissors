function computerPlay() {

    const choices = ['rock', 'paper', 'scissors'];

    return choices[Math.floor(Math.random() * choices.length - 1)];

}

function game() {

    function playRound(playerSelection, computerSelection) {

        if (playerSelection == 'rock') {

            return (computerSelection == 'rock') ? "Tie" 
            :   (computerSelection == 'paper') ? "You lose"
            :   "You win... This time.";
        }
        else if (playerSelection == 'paper'){
            return (computerSelection == 'paper') ? "Tie! Great minds think alike!" 
            :   (computerSelection == 'scissors') ? "LOSER!"
            :   "You win the battle, not the war.";
        }
        else if (playerSelection == 'scissors'){
            return (computerSelection == 'scissors') ? "We chose ALIKE!" 
            :   (computerSelection == 'rock') ? "Get a life!"
            :   "Victory is yours.";
        }
        else return "Please enter a valid option";

    }   

    const playerSelection = prompt("Rock, paper, or scissors?");
    const computerSelection = computerPlay();
    

    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
    }
}





