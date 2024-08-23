const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper')
const scissorsButton = document.getElementById('scissors');
const results = document.getElementById('results')

let humanScore = 0;
let computerScore = 0;

results.textContent = "PlayerScore: " + humanScore + " ComputerScore: " + computerScore;

function getComputerChoice(){
    let random = Math.random();
    if (random <= 0.33){
        return 'rock';
    } else if (random > 0.33 && random <=0.66){
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(computerChoice, playerChoice){
    printChoice(computerChoice, playerChoice);
    if (computerChoice == 'rock' && playerChoice == 'scissors'){
        computerScore += 1;
        printLoss(computerChoice, playerChoice);
        results.textContent = "PlayerScore: " + humanScore + " ComputerScore: " + computerScore;
    } 
    else if (computerChoice == 'rock' && playerChoice == 'paper'){
        humanScore += 1;
        printWin(computerChoice, playerChoice);
        results.textContent = "PlayerScore: " + humanScore + " ComputerScore: " + computerScore;
    }
    else if (computerChoice == 'paper' && playerChoice == 'rock'){
        computerScore += 1;
        printLoss(computerChoice, playerChoice);
        results.textContent = "PlayerScore: " + humanScore + " ComputerScore: " + computerScore;
    }
    else if (computerChoice == 'paper' && playerChoice == 'scissors'){
        humanScore += 1
        printWin(computerChoice, playerChoice);
        results.textContent = "PlayerScore: " + humanScore + " ComputerScore: " + computerScore;
    }
    else if (computerChoice == 'scissors' && playerChoice == 'paper'){
        computerScore += 1;
        printLoss(computerChoice, playerChoice);
        results.textContent = "PlayerScore: " + humanScore + " ComputerScore: " + computerScore;
    }
    else if (computerChoice == 'scissors' && playerChoice == 'rock'){
        humanScore += 1
       printWin(computerChoice, playerChoice);
       results.textContent = "PlayerScore: " + humanScore + " ComputerScore: " + computerScore;
    }
    else if (computerChoice ==  playerChoice){
        printTie();
    }
    if(humanScore == 5){
        if (humanScore > computerScore){
            alert("The player is the winner");
            humanScore = 0;
            computerScore = 0;
        } else {
            alert("The computer is the winner");
            humanScore = 0;
            computerScore = 0;
        }
        results.textContent = "PlayerScore: " + humanScore + " ComputerScore: " + computerScore;
    }
}

rockButton.addEventListener('click', function(){
    playRound(getComputerChoice(), 'rock');
});
paperButton.addEventListener('click', function(){
    playRound(getComputerChoice(), 'paper');
});
scissorsButton.addEventListener('click', function(){
    playRound(getComputerChoice(), 'scissors');
});

function printChoice(computerChoice, playerChoice){
    console.log("Computer played " + computerChoice);
    console.log("Human played " + playerChoice);
}

function invalidChoice(){
    console.log("Please, type a valid choice.");
}

function printLoss(computerChoice, playerChoice){
    console.log("You lose! " +  computerChoice + " beats " + playerChoice);
}

function printWin(computerChoice, playerChoice){
    console.log("You won! " + playerChoice + " beats " + computerChoice);
}

function printTie(){
    console.log("It's a tie!");
}

function printScore(computerScore, humanScore){
    console.log("Computer score: " + computerScore);
    console.log("Player score: " + humanScore);
}

function hello(){
    alert("Hello");
}
