// BEGIN
// SET CHOICES
let humanScore = 0;
let computerScore = 0;

let choice = ["rock", "paper", "scissors"];

// GET COMPUTER CHOICE
function getComputerChoice(choice) {
    return choice[Math.floor(Math.random() * choice.length)];
}
// GET USER CHOICE
function getUserChoice() {
    prompt("Enter User Choice: ");
}
console.log(getComputerChoice(choice));
console.log(getUserChoice());


// IF USER CHOICE IS ROCK AND COMPUTER CHOICE IS SCISSORS
function playGame() {
    if (getUserChoice() === "rock" && getComputerChoice(choice) === "scissors") {
    return "User wins!";
    } else if (getUserChoice() === "scissors" && getComputerChoice(choice) === "rock") {
        return "Computer wins!";
    } else if (getUserChoice() === "paper" && getComputerChoice(choice) === "rock") {
        return "User wins!";
    } else if (getUserChoice() === "rock" && getComputerChoice(choice) === "paper") {
        return "Computer wins!";
    } else if (getUserChoice() === "scissors" && getComputerChoice(choice) === "paper") {
        return "User wins!";
    } else if (getUserChoice() === "paper" && getComputerChoice(choice) === "scissors") {
        return "Computer wins!";
    } else if (getUserChoice() === getComputerChoice(choice)) {
        return "It's a tie! Resetting game.";
    } else {
        return "Invalid input. Please choose rock, paper, or scissors.";
    }
}

console.log(playGame());
// THEN USER WINS

// ELSE IF USER CHOICE IS SCISSORS AND COMPUTER CHOICE IS ROCK
// THEN COMPUTER WINS

// ELSE IF USER CHOICE IS PAPER AND COMPUTER CHOICE IS ROCK
// THEN USER WINS

// ELSE IF USER CHOICE IS ROCK AND COMPUTER CHOICE IS PAPER
// THEN COMPUTER WINS

// ELSE IF USER CHOICE IS SCISSORS AND COMPUTER IS PAPER
// THEN USER WINS

// ELSE IF USER CHOICE IS PAPER AND COMPUTER IS SCISSORS
// THEN COMPUTER WINS

// ELSE IF USER CHOICE IS EQUAL TO COMPUTER CHOICE
// THEN RESET GAME

// ENDIF