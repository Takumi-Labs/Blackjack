let firstCard = 11;
let secondCard = 11;
let cardSum = firstCard + secondCard;

let hasBlackJack = false;
let isAlive = true;

let message = "";

console.log(cardSum);

function startGame() {
  if (cardSum < 21) {
    message =
      "😒 i'm sorry you didn't quite hit 21, but luckily you are still in the game. Do you want to draw a new card?";
  } else if (cardSum === 21) {
    message = "🥳Congratulation, you got a Blackjack!!!";
    hasBlackJack = true;
  } else {
    message = "😭I'm sorry but you are out of the game. Yikes🥶";
    isAlive = false;
  }

  console.log(hasBlackJack);

  console.log(message);
}
