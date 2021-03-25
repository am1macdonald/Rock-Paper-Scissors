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
        return (computerSelection === 'rock') ? tieCount++
                : (computerSelection === 'paper') ? computerScore++
                : playerScore++;
    } else if (playerSelection === 'paper'){
        return (computerSelection === 'paper') ? tieCount++
                : (computerSelection === 'scissors') ? computerScore++
                : playerScore++;
    } else if (playerSelection === 'scissors'){
        return (computerSelection === 'scissors') ? tieCount++
                : (computerSelection === 'rock') ? computerScore++
                : playerScore++;
    }  
};