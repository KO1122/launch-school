const readline = require("readline-sync");

const INITIAL_MARKER = " ";
const HUMAN_MARKER = "X";
const COMPUTER_MARKER = "O";
const GAMES_TO_WIN_MATCH = 5;
const MIDDLE_SQUARE = "5";
const ACTIVE_FIRST = "player"; // "player", "computer", "choose"
const VALID_INPUTS = ["y", "Y", "n", "N"];

const WINNING_LINES = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9], // rows
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9], // columns
  [1, 5, 9],
  [3, 5, 7], // diagonals
];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function joinOr(numbers, delimeter = ", ", joinWord = "or") {
  let length = numbers.length;
  if (length <= 1) return numbers.toString();
  if (length === 2) return numbers.join(` ${joinWord} `);

  let listOfNums = "";
  for (let i = 0; i < length - 1; i++) {
    listOfNums += `${numbers[i]}${delimeter}`;
  }
  listOfNums += `${joinWord} ${numbers[length - 1]}`;
  return listOfNums;
}

function displayBoard(board) {
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log("");
  console.log("     |     |");
  console.log(`  ${board["1"]}  |  ${board["2"]}  |  ${board["3"]}`);
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("     |     |");
  console.log(`  ${board["4"]}  |  ${board["5"]}  |  ${board["6"]}`);
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("     |     |");
  console.log(`  ${board["7"]}  |  ${board["8"]}  |  ${board["9"]}`);
  console.log("     |     |");
  console.log("");
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter((key) => board[key] === " ");
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}):`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let square;

  // offense
  if (!square) {
    for (let index = 0; index < WINNING_LINES.length; index++) {
      let line = WINNING_LINES[index];
      square = findAtRiskSquare(line, board, COMPUTER_MARKER);
      if (square) break;
    }
  }

  // defense
  if (!square) {
    for (let index = 0; index < WINNING_LINES.length; index++) {
      let line = WINNING_LINES[index];
      square = findAtRiskSquare(line, board, HUMAN_MARKER);
      if (square) break;
    }
  }

  if (!square) {
    if (emptySquares(board).includes(MIDDLE_SQUARE)) {
      square = MIDDLE_SQUARE;
    }
  }

  // just pick a random square
  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWonMatch(board) {
  return detectWinner(board);
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return "Player";
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return "Computer";
    }
  }

  return null;
}

function initializeScore() {
  return { player: 0, computer: 0 };
}

function displayScore(score) {
  console.log(`\nScore: Player ${score.player} - Computer ${score.computer}\n`);
}

function someoneWonGame(score) {
  return (
    score.player === GAMES_TO_WIN_MATCH || score.computer === GAMES_TO_WIN_MATCH
  );
}

function findAtRiskSquare(line, board, marker) {
  let markersInLine = line.map((square) => board[square]);

  if (markersInLine.filter((val) => val === marker).length === 2) {
    let unusedSquare = line.find((square) => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }

  return null;
}

function chooseSquare(board, active) {
  if (active === "player") {
    playerChoosesSquare(board);
  } else {
    computerChoosesSquare(board);
  }
  return active === "player" ? "computer" : "player";
}

while (true) {
  let score = initializeScore();

  while (true) {
    let board = initializeBoard();
    let active = ACTIVE_FIRST;

    if (active === "choose") {
      prompt(`Choose who will move first (player or computer):`);
      active = readline.question().trim();
    }

    while (true) {
      active = chooseSquare(board, active);
      displayBoard(board);
      if (someoneWonMatch(board) || boardFull(board)) break;

      active = chooseSquare(board, active);
      displayBoard(board);
      if (someoneWonMatch(board) || boardFull(board)) break;
    }

    displayBoard(board);
    if (someoneWonMatch(board)) {
      let winner = detectWinner(board);
      if (winner === "Player") {
        score.player += 1;
      } else {
        score.computer += 1;
      }
      prompt(`${winner} won the match!`);
    } else {
      prompt("It's a tie!");
    }

    displayScore(score);
    if (someoneWonGame(score)) {
      prompt(`${detectWinner(board)} won the game!`);
      break;
    }
  }

  let answer;
  while (true) {
    prompt("Play again? (y or n)");
    answer = readline.question().trim().toLowerCase();
    if (VALID_INPUTS.includes(answer)) break;
    prompt("Sorry, that's not a valid choice.");
  }

  if (answer === "n") break;
}

prompt("Thanks for playing Tic Tac Toe!");
