const readline = require("readline-sync");
const VALID_CHOICES = [
  "rock",
  "r",
  "paper",
  "p",
  "scissors",
  "sc",
  "lizard",
  "l",
  "spock",
  "sp",
];
const PLAYER_WIN_CONDITIONS = [
  ["scissors", "paper"],
  ["paper", "rock"],
  ["rock", "lizard"],
  ["lizard", "spock"],
  ["spock", "scissors"],
  ["scissors", "lizard"],
  ["lizard", "paper"],
  ["paper", "spock"],
  ["spock", "rock"],
  ["rock", "scissors"],
];
const COMPUTER_WIN_CONDITIONS = PLAYER_WIN_CONDITIONS.map((condition) =>
  condition.slice().reverse()
);
const SHORTHAND_CHOICES = {
  r: "rock",
  p: "paper",
  sc: "scissors",
  sp: "spock",
  l: "lizard",
};
const SCORE_TO_WIN = 3;

let playerScore = 0;
let computerScore = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

function checkPlayerWin(choice, computerChoice) {
  if (
    PLAYER_WIN_CONDITIONS.some(
      (condition) => condition[0] === choice && condition[1] === computerChoice
    )
  ) {
    return 1;
  } else if (
    COMPUTER_WIN_CONDITIONS.some(
      (condition) => condition[0] === choice && condition[1] === computerChoice
    )
  ) {
    return -1;
  } else {
    return 0;
  }
}

function displayRoundWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  let playerWins = checkPlayerWin(choice, computerChoice);
  if (playerWins === 1) {
    prompt("You win the round!");
  } else if (playerWins === -1) {
    prompt("Computer wins the round!");
  } else {
    prompt("It's a tie!");
  }

  prompt(`Your score: ${playerScore}, Computer score: ${computerScore}`);
}

function displayGameWinner() {
  if (playerScore === SCORE_TO_WIN) {
    prompt("You win the game!");
  } else if (computerScore === SCORE_TO_WIN) {
    prompt("Computer wins the game!");
  }
}

function updateScore(choice, computerChoice) {
  let playerWins = checkPlayerWin(choice, computerChoice);
  if (playerWins === 1) {
    playerScore += 1;
  } else if (playerWins === -1) {
    computerScore += 1;
  }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  if (SHORTHAND_CHOICES.hasOwnProperty(choice)) {
    choice = SHORTHAND_CHOICES[choice];
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  if (SHORTHAND_CHOICES.hasOwnProperty(computerChoice)) {
    computerChoice = SHORTHAND_CHOICES[computerChoice];
  }

  updateScore(choice, computerChoice);
  displayRoundWinner(choice, computerChoice);

  if (playerScore === SCORE_TO_WIN || computerScore === SCORE_TO_WIN) {
    displayGameWinner();
    break;
  }

  prompt("Do you want to play again (y/n)?");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== "n" && answer[0] !== "y") {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== "y") break;
}
