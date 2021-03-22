function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
};
function game() {
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
    function playRound(playerSelection, computerSelection) {
        if (/rock|^r/gi.test(playerSelection)) {
            return (computerSelection == 'rock') ? "Tie" 
            :   (computerSelection == 'paper') ? changeScore('l')
            :   changeScore('w');
        } else if (/paper|^p/gi.test(playerSelection)){
            return (computerSelection == 'paper') ? "Tie! Great minds think alike!" 
            :   (computerSelection == 'scissors') ? changeScore('l')
            :   changeScore('w');
        } else if (/scissors|^s/gi.test(playerSelection)){
            return (computerSelection == 'scissors') ? "We chose ALIKE!" 
            :   (computerSelection == 'rock') ? changeScore('l')
            :   changeScore('w');
        } else if (/exit|^e/gi.test(playerSelection)){
            exitStrategy = true;
        } else return "Please enter a valid option";
    };
    while (playerScore < 5 && computerScore < 5 && exitStrategy == false){
        const playerSelection = prompt("Rock, paper, or scissors? (R, P, S)\n\nType Exit to quit.");
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection), computerSelection);
        console.log(playerScore, computerScore);
    };
    return (playerScore > computerScore) ? "You Win the Game!"
    : "You Lose the Game!";
};