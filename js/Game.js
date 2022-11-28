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
    container.innerHTML = ''
    for (const key of keys) {
      key.disabled = false;
      key.classList = 'key'
    }
       this.missed = 0;
       for (let heart of hearts) {
         heart.src = "images/liveHeart.png";
       }
    overlay.style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  handleInteraction(btn) {
        btn.disabled = true;
        if (this.activePhrase.checkLetter(btn.innerHTML)) {
          btn.classList.add("chosen");
          this.activePhrase.showMatchedLetter(btn.innerHTML);
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
    hearts[hearts.length - 1 - this.missed].src = "images/lostHeart.png";
    this.missed++;
    if (this.missed === 5) {
      this.gameOver("lose");
    }
  }

  gameOver(result) {
            const gameOverMessage = document.getElementById('game-over-message');
        overlay.style.display = 'flex';
        if (result === 'win') {
            gameOverMessage.innerHTML = "Congrats, you won!";
            overlay.classList = 'win';
        } else if (result === 'lose') {
            gameOverMessage.innerHTML = "You lost, try again!";
            overlay.classList = 'lose';
        }
    }
  

}
