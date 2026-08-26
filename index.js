let cards = [];
let cardSum = 0;

let hasBlackJack = false;
let isAlive = false;

let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.querySelector("#player-el");

let player = {
  name: "Mimi",
  chips: 200,
};

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  cardSum = firstCard + secondCard;
  executeGame();
}

function executeGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + cardSum;

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
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    cardSum += card;
    cards.push(card);
    console.log(cards);

    executeGame();
  }
}
