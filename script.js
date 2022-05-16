const rpc = ['rock', 'paper', 'scissors'];
let userScore = 0;
let computerScore = 0;

function computerPlay() {
    return Math.floor(Math.random() * 3);
}

function userPlay() {
    let selection = promptUser();
    while (!rpc.includes(selection)) {
        selection = promptUserAgain();
    }
    return rpc.indexOf(selection);
}

function promptUser() {
    let selection = prompt("please choose rock paper or scissors");
    return selection.toLowerCase();
}

function promptUserAgain() {
    let selection = prompt("invalid value! please choose rock paper or scissors");
    return selection.toLowerCase();
}

function playRound(computerSelection, userSelection) {

    if (computerSelection == userSelection) {
        console.log('it is a draw!');
        return;
    }

    result = computerSelection - userSelection;
    
    if (result == -1 || result == 2) {
        console.log("you win this round!");
        userScore++;
    } else {
        console.log("you lose this round!");
        computerScore++;
    }

}

function play() {
    let computerSelection, userSelection;
    for (let i = 0; i < 5; i++) {
        computerSelection = computerPlay();
        userSelection = userPlay();
        playRound(computerSelection, userSelection);
    }
    console.log(`you scored ${userScore}`);
    console.log(`the computer scored ${computerScore}`);
    if (userScore == computerScore) console.log("the game is a draw");
    else if (userScore > computerScore) console.log(`WUHHUUUU YOU BEAT THE COMPUTER with a score of ${userScore}`);
    else console.log(`BOOOOOOOOO you could NOT beat the computer`);
    computerScore = 0;
    userScore = 0;  
    return;  
}

play();

