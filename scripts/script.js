let playerScore = 0;
let computerScore = 0;
let tieCount = 0;
let roundNumber = 0;

const buttons = document.querySelectorAll('.game-button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id);
        updateScores();
        
    });
});

var modal = document.getElementById("results-Modal");

function endGame(){

    if (playerScore > computerScore){
        
    } else alert("Loser!");

    modal

}

function updateScores(){
    roundNumber++;
    document.getElementById("round-number").innerText = "ROUND: " + roundNumber.toString();
    document.getElementById("player-score-display").innerText = playerScore.toString();
    document.getElementById("computer-score-display").innerText = computerScore.toString();
    document.getElementById("ties-display").innerText = tieCount.toString();
    if (playerScore === 5 || computerScore === 5) {
        endGame();
    }
};

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
};
function playRound(playerSelection) {
    

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
    };
    
    
};