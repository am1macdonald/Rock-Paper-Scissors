<script>

function computerPlay() {

    const choices = ['rock', 'paper', 'scissors'];

    return choices[Math.floor(Math.random() * choices.length - 1)];

}

function game() {

    function playRound(playerSelection, computerSelection) {

        if (playerSelection == 'rock') {

            return (computerSelection == 'rock') ? "Tie" 
            :   (computerSelection == 'paper') ? "You lose"
            :   "You win!";
        }
        else if (playerSelection == 'paper'){
            return (computerSelection == 'paper') ? "Tie" 
            :   (computerSelection == 'scissors') ? "You lose"
            :   "You win!";
        }
        else if (playerSelection == 'scissors'){
            return (computerSelection == 'scissors') ? "Tie" 
            :   (computerSelection == 'rock') ? "You lose"
            :   "You win!";
        }
        else return "Please enter a valid option";

    }   

    const playerSelection = prompt("Rock, paper, or scissors?");
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
}






</script>
