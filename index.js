let firstCard = 7;
let secondCard = 11;
let cardSum = firstCard + secondCard;

let hasBlackJack = false;
let isAlive = true;

let message = "";

let messageEl = document.getElementById("message-el");
console.log(messageEl);

function startGame() {
  if (cardSum <= 20) {
    message =
      " i'm sorry you didn't quite hit 21, but luckily you are still in the game. Do you want to draw a new card?";
  } else if (cardSum === 21) {
    message = "Congratulation, you got a Blackjack!!!";
    hasBlackJack = true;
  } else {
    message = "I'm sorry, you are out of the game. Yikes";
    isAlive = false;
  }

  messageEl.textContent = message;
}
