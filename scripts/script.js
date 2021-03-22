const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id);
    });
});

    
let playerScore = 0;

let computerScore = 0;
let exitStrategy = false;
function changeScore(winOrLose){
        if (winOrLose == 'w') {
            playerScore++
            return "Win!"
        } else if (winOrLose == 'l'){
            computerScore++
            return "Lose..."
        }
}
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
};
function playRound(playerSelection) {

    const computerSelection = computerPlay();
    

    console.log('Player Score: ', playerScore);
    console.log('Computer Score: ', computerScore);
    console.log('comp: ' + computerSelection, 'player: ' + playerSelection);
    

    if (playerSelection === 'rock') {
            return (computerSelection === 'rock') ? "Tie" 
            :   (computerSelection === 'paper') ? changeScore('l')
            :   changeScore('w');
    } else if (playerSelection === 'paper'){
            return (computerSelection === 'paper') ? "Tie! Great minds think alike!" 
            :   (computerSelection === 'scissors') ? changeScore('l')
            :   changeScore('w');
    } else if (playerSelection === 'scissors'){
            return (computerSelection === 'scissors') ? "We chose ALIKE!" 
            :   (computerSelection === 'rock') ? changeScore('l')
            :   changeScore('w');
    } else if (playerSelection){
            exitStrategy = true;
    } else return "Please enter a valid option";
};
    /*
    while (playerScore < 5 && computerScore < 5 && exitStrategy == false){
        const playerSelection = prompt("Rock, paper, or scissors? (R, P, S)\n\nType Exit to quit.");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection), computerSelection);
        console.log(playerScore, computerScore);
    };
    */
