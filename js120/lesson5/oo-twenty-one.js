let readline = require("readline-sync");

class Card {
  static SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"];
  static RANKS = [
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

  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
    this.hidden = false;
  }

  toString() {
    if (this.isHidden()) return "Hidden";
    return `${this.getRank()} of ${this.getSuit()}`;
  }

  getSuit() {
    return this.suit;
  }

  getRank() {
    return this.rank;
  }

  getValueOf() {
    switch (this.getRank()) {
      case "Jack":
      case "Queen":
      case "King":
        return 10;
      case "Ace":
        return 11;
      default:
        return Number(this.getRank());
    }
  }

  hide() {
    this.hidden = true;
  }

  show() {
    this.hidden = false;
  }

  isHidden() {
    return this.hidden;
  }
}

class Deck {
  constructor() {
    this.deck = [];
    this.init();
    this.shuffle();
  }

  init() {
    Card.SUITS.forEach((suit) => {
      Card.RANKS.forEach((rank) => {
        this.deck.push(new Card(suit, rank));
      });
    });
  }

  shuffle() {
    for (let index = this.deck.length - 1; index > 0; index--) {
      let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
      [this.deck[index], this.deck[otherIndex]] = [
        this.deck[otherIndex],
        this.deck[index],
      ]; // swap elements
    }
  }

  dealCardFaceUp() {
    return this.deck.pop();
  }

  dealCardFaceDown() {
    let card = this.dealCardFaceUp();
    card.hide();
    return card;
  }

  reset() {
    this.deck = [];
    this.init();
    this.shuffle();
  }
}

class Participant {
  static MAX_SCORE = 21;

  constructor() {
    this.score = 0;
    this.hand = [];
  }

  getScore() {
    return this.score;
  }

  isBusted() {
    return this.getScore() > Participant.MAX_SCORE;
  }

  hasValidScore() {
    return this.score <= Participant.MAX_SCORE;
  }

  canAdd(cardValue) {
    return this.score + cardValue <= Participant.MAX_SCORE;
  }

  addToHand(card) {
    this.hand.push(card);
    this.addToScore(card);
  }

  addToScore(card) {
    let cardValue = card.getValueOf();
    if (!this.canAdd(cardValue) && card.getRank() === "Ace") {
      this.score += 1;
    } else {
      this.score += cardValue;
    }
  }

  showCards(name) {
    console.log("");
    console.log(`${name}'s cards`);
    this.hand.forEach((card) => console.log(`  ${card}`));
  }

  showScore() {
    console.log(`  Points: ${this.score}`);
  }

  reset() {
    this.score = 0;
    this.hand = [];
  }
}

class Player extends Participant {
  static BROKE = 0;
  static RICH = 10;

  constructor() {
    super();
    this.money = 5;
  }

  getMoney() {
    return this.money;
  }

  addMoney() {
    this.money += 1;
  }

  deductMoney() {
    this.money -= 1;
  }

  isBroke() {
    return this.money === Player.BROKE;
  }

  isRich() {
    return this.money === Player.RICH;
  }
}

class Dealer extends Participant {
  constructor() {
    super();
  }
}

class TwentyOneGame {
  static HIT = "h";
  static STAY = "s";
  static PLAYER = "Player";
  static DEALER = "Dealer";
  static TIE = "Tie";

  constructor() {
    this.player = new Player();
    this.dealer = new Dealer();
    this.deck = new Deck();
  }

  start() {
    this.displayWelcomeMessage();

    while (true) {
      this.reset();
      this.playOneGame();
      if (this.player.isBroke() || this.player.isRich()) break;
      if (!this.choosePlayAgain()) break;
    }

    this.showWealth();
    this.displayGoodbyeMessage();
  }

  playOneGame() {
    this.dealCards();
    this.showCards();
    this.showMoney();
    this.playerTurn();

    if (!this.player.isBusted()) {
      this.dealerTurn();
    }

    console.clear();
    this.showCards();
    this.displayResult();
    this.updateMoney();
    this.showMoney();
  }

  choosePlayAgain() {
    let answer;

    while (true) {
      answer = readline.question("\nPlay again (y/n)? ").trim().toLowerCase();

      if (["y", "n"].includes(answer)) break;

      console.log("That's not a valid choice.");
      console.log("");
    }

    console.clear();
    return answer === "y";
  }

  dealCards() {
    this.player.addToHand(this.deck.dealCardFaceUp());
    this.player.addToHand(this.deck.dealCardFaceUp());
    this.dealer.addToHand(this.deck.dealCardFaceUp());
    this.dealer.addToHand(this.deck.dealCardFaceDown());
  }

  showCards() {
    this.dealer.showCards("Dealer");
    this.dealer.showScore();
    this.player.showCards("Player");
    this.player.showScore();
  }

  showMoney() {
    console.log(`\nYou have $${this.player.getMoney()}`);
  }

  updateMoney() {
    let result = this.calculateResult();
    if (result === TwentyOneGame.PLAYER) {
      this.player.addMoney();
    } else if (result === TwentyOneGame.DEALER) {
      this.player.deductMoney();
    }
  }

  chooseHitOrStay() {
    let answer;

    while (true) {
      answer = readline.question("\nHit or Stay (h/s)? ").trim().toLowerCase();
      if ([TwentyOneGame.HIT, TwentyOneGame.STAY].includes(answer)) break;

      console.log("That's not a valid choice.\n");
    }

    return answer;
  }

  hit(participant) {
    let card = this.deck.dealCardFaceUp();
    participant.addToHand(card);

    console.clear();
    this.showCards();
  }

  playerTurn() {
    while (this.chooseHitOrStay() === TwentyOneGame.HIT) {
      this.hit(this.player);
      if (!this.player.hasValidScore()) break;
    }
  }

  dealerTurn() {
    let hiddenCard = this.dealer.hand.find((card) => card.isHidden());
    hiddenCard.show();

    while (this.dealer.getScore() < 17) {
      this.hit(this.dealer);
    }
  }

  displayWelcomeMessage() {
    console.clear();
    console.log("Welcome to 21!");
  }

  displayGoodbyeMessage() {
    console.log("\nThanks for playing!");
  }

  calculateResult() {
    if (this.player.isBusted()) return TwentyOneGame.DEALER;
    if (this.dealer.isBusted()) return TwentyOneGame.PLAYER;

    if (this.player.getScore() > this.dealer.getScore()) {
      return TwentyOneGame.PLAYER;
    } else if (this.player.getScore() < this.dealer.getScore()) {
      return TwentyOneGame.DEALER;
    }
    return TwentyOneGame.TIE;
  }

  displayResult() {
    console.log("");
    if (this.player.isBusted()) {
      console.log("You busted! Dealer wins.");
      return;
    }
    if (this.dealer.isBusted()) {
      console.log("Dealer busted! You win.");
      return;
    }

    let result = this.calculateResult();
    switch (result) {
      case TwentyOneGame.PLAYER:
        console.log("You win!");
        break;
      case TwentyOneGame.DEALER:
        console.log("Dealer wins!");
        break;
      default:
        console.log("It's a tie!");
    }
  }

  showWealth() {
    if (this.player.isBroke()) {
      console.log("You're broke!");
    } else if (this.player.isRich()) {
      console.log("You're rich!");
    }
  }

  reset() {
    this.player.reset();
    this.dealer.reset();
    this.deck.reset();
  }
}

let game = new TwentyOneGame();
game.start();
