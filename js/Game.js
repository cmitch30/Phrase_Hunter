/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const overlay = document.getElementById("overlay");
const hearts = document.querySelectorAll(".tries img");
const keys = document.getElementsByClassName("key");
const tries = document.querySelector(".tries");

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase("Par For the Course"),
      new Phrase("Hard Pill to Swallow"),
      new Phrase("A Day Late and a Dollar Short"),
      new Phrase("Mountain Out of a Molehill"),
      new Phrase("An Arm and a Leg"),
    ];
    this.activePhrase = null;
  }

  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random() * 5)];
  }

  startGame() {
    overlay.style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  handleInteraction(btn) {
    if (this.activePhrase.checkLetter(btn.innerHtml) === true) {
      btn.disabled = true;
      btn.classList.add("chosen");
      this.activePhrase.showMatchedLetter(btn.innerHtml);
      this.checkForWin();
    } else {
      btn.classList.add("wrong");
      this.removeLife();
    }
  }

  checkForWin() {
      const phraseLetters = document.getElementsByClassName("letter");
      let lettersShown = 0;
      for (let i = 0; i < phraseLetters.length; i++) {
        const e = phraseLetters[i];
        if (e.classList.contains("show")) {
          lettersShown++;
        }
      }

      if (lettersShown === phraseLetters.length) {
        this.gameOver("win");
      }
  }

  removeLife() {
    this.missed++;
    if (this.missed >= 5) {
      this.gameOver("lose");
    } else {
      hearts[hearts.length - this.missed].src = "./images/lostHeart.png";
    }
  }

  gameOver() {}
}
