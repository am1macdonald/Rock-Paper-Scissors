function computerPlay() {

    const choices = ['rock', 'paper', 'scissors'];

    return choices[Math.floor(Math.random() * choices.length)];

};

function game() {

    let playerScore = 0;
    let computerScore = 0;

    function changeScore(winOrLose){
        if (winOrLose == 'w') {
            playerScore++
            return "Win!"
        } else if (winOrLose == 'l'){
            computerScore++
            return "Lose..."
        }
    }

    function playRound(playerSelection, computerSelection) {

        if (/(r|rock)/gi.test(playerSelection)) {

            return (computerSelection == 'rock') ? "Tie" 
            :   (computerSelection == 'paper') ? changeScore('l')
            :   changeScore('w');
        }
        else if (/(p|paper)/gi.test(playerSelection)){
            return (computerSelection == 'paper') ? "Tie! Great minds think alike!" 
            :   (computerSelection == 'scissors') ? changeScore('l')
            :   changeScore('w');
        }
        else if (/(s|scissors)/gi.test(playerSelection)){
            return (computerSelection == 'scissors') ? "We chose ALIKE!" 
            :   (computerSelection == 'rock') ? changeScore('l')
            :   changeScore('w');
        }
        else return "Please enter a valid option";

    };
    
    

    while (playerScore < 5 && computerScore < 5){
        const playerSelection = prompt("Rock, paper, or scissors? (R, P, S)");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection), computerSelection);
        console.log(playerScore, computerScore);
    };

    return (playerScore > computerScore) ? "You Win the Game!"
    : "You Lose the Game!";
};





