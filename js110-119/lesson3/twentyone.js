const readline = require("readline-sync");
const PLAYER = "player";
const DEALER = "dealer";
const BUST = 21;
const VALUES = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
  "Ace",
];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
}

function initializeDeck() {
  let deck = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < VALUES.length; j++) {
      deck.push(VALUES[j]);
    }
  }
  return deck;
}

function initializeScores() {
  return { player: 0, dealer: 0 };
}

function playerChoice(deck, scores) {
  while (true) {
    prompt("Hit or stay?");
    let answer = readline.question().trim();
    if (answer === "stay") break;
    if (answer !== "hit" && answer !== "stay") {
      console.log("Sorry, that's not a valid choice.");
      continue;
    }

    let card = hitCard(deck, scores, PLAYER);
    displayCard(card, PLAYER);
    displayScore(scores, PLAYER);
    if (isBust(scores.player)) break;
  }
}

function dealerChoice(deck, scores) {
  // Hit until the total is at least 17. If the dealer busts, then the player wins.
  while (scores.dealer < 17) {
    let card = hitCard(deck, scores, DEALER);
    let toAdd = calculateCardValue(card);
    incrementScore(scores, DEALER, toAdd);
    if (isBust(scores.dealer)) break;
  }
}

function dealCards(deck, scores, playerHand, dealerHand) {
  for (let i = 0; i < 2; i++) {
    let playerCard = hitCard(deck, scores, PLAYER);
    let dealerCard = hitCard(deck, scores, DEALER);
    playerHand.push(playerCard);
    dealerHand.push(dealerCard);
  }
}

function hitCard(deck, scores, person) {
  let card = deck.pop();
  let toAdd = calculateCardValue(card);
  incrementScore(scores, person, toAdd);
  return card;
}

function calculateCardValue(card, score) {
  switch (card) {
    case "Jack":
    case "Queen":
    case "King":
      return 10;
    case "Ace":
      if (isValidScore(score, 11)) return 11;
      return 1;
    default:
      return Number(card);
  }
}

function isBust(score) {
  return score > BUST;
}

function isValidScore(score, toAdd) {
  return score + toAdd <= 21;
}

function incrementScore(scores, person, toAdd) {
  scores[person] += toAdd;
}

function calculateResult(scores) {
  if (scores.player > scores.dealer) {
    return PLAYER;
  } else if (scores.player < scores.dealer) {
    return DEALER;
  }
  return "tie";
}

function displayCard(card, person) {
  console.log(`${capitalize(person)} drew ${card}`);
}

function displayCards(playerCards, dealerCards) {
  console.log(`Dealer has: ${dealerCards[0]} and unknown card`);
  console.log(`You have: ${playerCards.join(" and ")}`);
}

function displayScore(scores, person) {
  console.log(`${capitalize(person)} score is ${scores[person]}`);
}

function displayResult(result) {
  switch (result) {
    case PLAYER:
      console.log("You win!");
      break;
    case DEALER:
      console.log("Dealer wins!");
      break;
    default:
      console.log("It's a tie!");
  }
}

while (true) {
  let deck = initializeDeck();
  shuffle(deck);
  let scores = initializeScores();
  let playerHand = [];
  let dealerHand = [];

  console.log("\nWelcome to a game of Twenty-One!");

  dealCards(deck, scores, playerHand, dealerHand);
  displayCards(playerHand, dealerHand);
  displayScore(scores, PLAYER);

  playerChoice(deck, scores);
  if (isBust(scores.player)) {
    console.log("Your score is over 21!");
    console.log("You Lose!");
    break;
  }

  dealerChoice(deck, scores);
  if (isBust(scores.dealer)) {
    console.log(`Dealer score is ${scores.dealer}`);
    console.log("You Win!");
    break;
  }

  let result = calculateResult(scores);
  displayScore(scores, PLAYER);
  displayScore(scores, DEALER);
  displayResult(result);

  let answer;
  while (true) {
    prompt("Play again? (y or n)");
    answer = readline.question().trim().toLowerCase();
    if ("yYNn".includes(answer)) break;
    prompt("Sorry, that's not a valid choice.");
  }

  if (answer === "n") break;
}
