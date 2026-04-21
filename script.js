// BEGIN
// SET CHOICES
const choice = ["rock", "paper", "scissors"];

// GET COMPUTER CHOICE
function getComputerChoice(choice) {
    return choice[Math.floor(Math.random() * choice.length)];
}
// console.log(getComputerChoice(choice));

// GET USER CHOICE
function getUserChoice() {
    let userChoice = prompt("Enter User Choice: ");
    if (userChoice === null) {
        console.log("Game cancelled.");
        return null;
    }
    return userChoice.toLowerCase();
}
// console.log(getUserChoice());

// SET SCORES
let humanScore = 0;
let computerScore = 0;
// GETTING ROUNDS
function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return "You win! Rock beats scissors.";

    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        return "You lose! Rock beats scissors.";

    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "You win! Paper beats rock.";

    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        return "You lose! Paper beats rock.";

    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return "You win! Scissors beats paper.";

    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        return "You lose! Scissors beats paper.";
    } else if (humanChoice === computerChoice) {
        return "It's a tie!";

    } else {
        return "Invalid input. Please choose rock, paper, or scissors.";
    } 
    
}


// const humanSelection = getUserChoice();
// const computerSelection = getComputerChoice(choice);

// playRound(humanSelection, computerSelection);
// IF USER CHOICE IS ROCK AND COMPUTER CHOICE IS SCISSORS
function playGame() {
    while (humanScore < 5 && computerScore < 5) {
        let humanChoice = getUserChoice();
        if (humanChoice === null) {
            break;
        }
        console.log(playRound(humanChoice, getComputerChoice(choice)));
    }
    if (humanScore === 5) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore === 5) {
        console.log("Sorry! You lost the game. Better luck next time!");
    }
}

playGame();