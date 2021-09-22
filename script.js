"use strict";
/*=====================*/
// DOM Elements Declaration:
let score = 20;
let highScore = 0;
let attempts = 0;
// let message = document.querySelector(".message")
// let happyMoss = document.createElement("img");
// happyMoss.classList.add("winning");
// happyMoss.src = "images/winning.png";

let number = document.querySelector(".number");
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// // Math.random()*20 > generates a number between 0 and 19.999999999999
// // Math.trunc(Math.random()*20) > fixes the number into an intiger between 0 and 19
// // Math.trunc(Math.random()*20)+1 > to elevate the random number range to be from 1 to 20 as we need, we add 1
let secretNumber = Math.trunc(Math.random() * 20) + 1;

/*=====================*/
//Handling button click >> Check:
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(secretNumber);
  if (attempts <= 3) {
    //======== Game Logic ========
    // /******* we need to create the correct/secret number once ,
    // it should be delcared outside the function otherwise
    // it will generate a new number with each click hence the logic won't stand.*/
    if (!guess) {
      //when there is no input
      displayMessage("⛔ Enter a number!");
    } else if (guess === secretNumber) {
      //when player wins
    // message.appendChild("happyMoss") 
      displayMessage("🎉 Correct number,You lucky duck! 🎉 ");
      //manipulate styles on winning
      number.textContent = secretNumber;
      document.querySelector("body").style.backgroundColor = "#0F7303";
      document.querySelector(".attempts").textContent = 0;

      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }
    } else if (guess !== secretNumber) {
      if (score > 1) {
        //here we apply a condition if the score is larger than 1
        // to action the code otherwise it will go infinite with"-"
        displayMessage(
          guess > secretNumber
            ? "⛔   Nope, that's too High! "
            : " ⛔   Naah, that's too LOW!"
        );
        score--;
        document.querySelector(".score").textContent = score;
      }
    }
    attempts++;
    document.querySelector(".attempts").textContent = attempts;
  }

  /*==============================*/
  // In case the right guess was on the 5th attempt??????
  // else if (attempts === 5 && guess === score){
  //   displayMessage("Correct number,You lucky duck!");
  //   //manipulate styles on winning
  //   document.querySelector(".number").textContent = secretNumber;
  //   document.querySelector("body").style.backgroundColor = "#60b347";
  //   document.querySelector(".number").style.width = "30rem";
  //   document.querySelector(".attempts").textContent = 0;
  // }
  else {
    displayMessage("You lost the flipping game, try again! 🤦🤦");
    document.querySelector(".score").textContent = 0;
    document.querySelector("body").style.backgroundColor = "#9d0208";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".attempts").textContent = attempts + 1;
  }
});

/*=====================*/
//Handling button click >> Reset:

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("⏲ Start guessing...");
  document.querySelector(".attempts").textContent = 0;
  document.querySelector(".score").textContent = score;
  number.textContent = "?";
  number.style.backgroundImage = "";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  // document.querySelector(".number").style.width = "15rem";
  attempts = 0;
});
