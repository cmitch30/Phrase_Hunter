/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  }

  addPhraseToDisplay() {
    for (let i = 0; i < this.phrase.length; i++) {
      if (
        (this.phrase[i] >= "A" && this.phrase[i] <= "Z") ||
        (this.phrase[i] >= "a" && this.phrase[i] <= "z")
      ) {
        container.innerHTML += `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
      } else {
        container.innerHTML += `<li class="space"> </li>`;
      }
    }
  }

  checkLetter(letter) {
    return this.phrase.includes(letter);
  }

  showMatchedLetter(letter) {
    const list = document.querySelectorAll("li");

    for (let i = 0; i < list.length; i++) {
      const char = selectLi[i];
      if (char.innerHTML === letter) {
        char.classList.replace("hide", "show");
      }
    }
  }
}
