let firstCard = 11;
let secondCard = 11;
let cards = `Cards: ${firstCard} ${secondCard}`;
let cardSum = firstCard + secondCard;

let hasBlackJack = false;
let isAlive = true;

let message = "";

let messageEl = document.getElementById("message-el");
//let sumEl = document.getElementById("sum-el");
//both can be used but query selector is more broad and prefered
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

function startGame() {
  executeGame();
}

function executeGame() {
  cardsEl.textContent = cards;
  sumEl.textContent = "Sum:" + cardSum;

  if (cardSum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (cardSum === 21) {
    message = "Congratulation, you got a Blackjack!!!";
    hasBlackJack = true;
  } else {
    message = "I'm sorry, you are out of the game. Yikes";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newCard() {
  console.log("Drawing a new card from the deck!");

  //let card = Math.floor(Math.random() * 11) + 2; //this should work better, but i'm following instructions for now.
  let card = 8;
  cardSum += card;

  executeGame();
}
