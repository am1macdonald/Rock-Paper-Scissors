let playerScore = 0;
let computerScore = 0;
let tieCount = 0;
let roundNumber = 0;

var modal = document.getElementById("results-modal");

const buttons = document.querySelectorAll('.game-button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id);
        updateScores()        
    });
});

const newGameButton = document.getElementById("again");
newGameButton.addEventListener("click", () => {

    playerScore = 0;
    computerScore = 0;
    tieCount = 0;
    roundNumber = -1;
    buttons.forEach((button) => {
        button.disabled = false;
    })
    updateScores();
    modal.style.display = "none";
});

const quitGameButton = document.getElementById("quit");
quitGameButton.addEventListener("click", () => {
    modal.style.display = "none";
});

function endGame(){
    buttons.forEach((button)=>{
        button.disabled = true;
    });
    if (playerScore > computerScore){
        document.getElementById("announcement").innerText = "You Win!";        
    } else document.getElementById("announcement").innerText = "You Lose...";
    modal.style.display = "block";
};

function updateScores(){
    roundNumber++;
    document.getElementById("round-number").innerText = "ROUND: " + roundNumber.toString();
    document.getElementById("player-score-display").innerText = playerScore.toString();
    document.getElementById("computer-score-display").innerText = computerScore.toString();
    document.getElementById("ties-display").innerText = tieCount.toString();
    if (playerScore === 5 || computerScore === 5) {
        endGame();
    };
};

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
};

function playRound(playerSelection) {
    const computerSelection = computerPlay();
    document.getElementById("player-choice").innerText = playerSelection;
    document.getElementById("computer-choice").innerText = computerSelection;
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