const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id);
    });
});


let playerScore = 0;
let computerScore = 0;
let tieCount = 0;

function updateScores(){
    document.getElementById("player-score-display").innerText = playerScore.toString();
    document.getElementById("computer-score-display").innerText = computerScore.toString();
    document.getElementById("ties-display").innerText = tieCount.toString();

};
function incrementScore(player) {
    if (player === 'comp') {
        computerScore++;
    } else if (player === 'person'){
        playerScore++;
    } else tieCount++;
    updateScores();
};





let exitStrategy = false;

function changeScore(winOrLose){
        if (winOrLose == 'w') {
            playerScore++
            return "Win!"
        } else if (winOrLose == 'l'){
            computerScore++
            return "Lose..."
        }
};
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
};
function playRound(playerSelection) {
    updateScores();

    const computerSelection = computerPlay();
    

    console.log('Player Score: ', playerScore.toString());
    console.log('Computer Score: ', computerScore);
    console.log('comp: ' + computerSelection, 'player: ' + playerSelection);
    

    if (playerSelection === 'rock') {
        return (computerSelection === 'rock') ? incrementScore('tie')
                : (computerSelection === 'paper') ? incrementScore('comp')
                : incrementScore('person');
    } else if (playerSelection === 'paper'){
        return (computerSelection === 'paper') ? incrementScore('tie')
                : (computerSelection === 'scissors') ? incrementScore('comp')
                : incrementScore('person');
    } else if (playerSelection === 'scissors'){
        return (computerSelection === 'scissors') ? incrementScore('tie')
                : (computerSelection === 'rock') ? incrementScore('comp')
                : incrementScore('person');
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
