function computerPlay() {

    const choices = ['rock', 'paper', 'scissors'];

    return choices[Math.floor(Math.random() * choices.length - 1)];

};

function game() {

    let playerScore = 0;
    let computerScore = 0;

    function changeScore(winOrLose){
        if (winOrLose == 'win') {
            playerScore++
            return "Win!"
        } else if (winOrLose == 'lose'){
            computerScore++
            return "Lose..."
        }
    }

    function playRound(playerSelection, computerSelection) {

        if (playerSelection == 'rock') {

            return (computerSelection == 'rock') ? "Tie" 
            :   (computerSelection == 'paper') ? changeScore('lose')
            :   changeScore('win');
        }
        else if (playerSelection == 'paper'){
            return (computerSelection == 'paper') ? "Tie! Great minds think alike!" 
            :   (computerSelection == 'scissors') ? changeScore('lose')
            :   changeScore('win');
        }
        else if (playerSelection == 'scissors'){
            return (computerSelection == 'scissors') ? "We chose ALIKE!" 
            :   (computerSelection == 'rock') ? changeScore('lose')
            :   changeScore('win');
        }
        else return "Please enter a valid option";

    };
    
    

    const playerSelection = prompt("Rock, paper, or scissors?");
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    console.log(playerScore, computerScore);
    console.log(playRound(playerSelection, computerSelection));
    console.log(playerScore, computerScore);
    console.log(playRound(playerSelection, computerSelection));
    console.log(playerScore, computerScore);
    console.log(playRound(playerSelection, computerSelection));
    console.log(playerScore, computerScore);
    console.log(playRound(playerSelection, computerSelection));
    console.log(playerScore, computerScore);

};





