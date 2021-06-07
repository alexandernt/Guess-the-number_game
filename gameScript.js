"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

let game = document
  .querySelector(".check")
  .addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    //Cuando el usuario no agrega ningún valor.
    if (!guess) {
      document.querySelector(".message").textContent =
        "❌No ingresaste un número valido❌";
      //Cuando el usuario gana.
    } else if (guess > 20 || guess < 1) {
      document.querySelector(".message").textContent =
        "❌Los números son entre 1 - 20❌";
    } else if (guess === secretNumber) {
      document.querySelector(".message").textContent =
        "❤ ❤ ❤  Advinaste el número!! ";
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      //Highscore
      if (score > highscore) {
        highscore = score;
      }
      document.querySelector(".highscore").textContent = highscore;

      //Cuando el usuario agrega valor mayor o menor
    } else if (guess > secretNumber) {
      if (score > 1) {
        document.querySelector(".message").textContent =
          "El número secreto es menor 🔽🔽🔽";
        score = score - 1;
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".score").textContent = "Perdiste King 😌";
      }
    } else if (guess < secretNumber) {
      if (score > 1) {
        document.querySelector(".message").textContent =
          "El número secreto es mayor 🔼🔼🔼";
        score = score - 1;
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".score").textContent = "Perdiste King 😌";
      }
    }
  });

document.querySelector(".again").addEventListener("click", function () {
  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  let score = 20;
  document.querySelector("body").style.backgroundColor = "#333";
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Empieza a adivinar!!";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = secretNumber;
  game;
});
