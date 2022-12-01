/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
 let game;
 const container = document.querySelector("#phrase ul");
 const button = document.getElementById("btn__reset");
 const keyboard = document.getElementById("qwerty");

 button.addEventListener('click', () => {
  game = new Game()
  game.startGame()
 })

 keyboard.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    game.handleInteraction(e.target)
  }
  
 })

 document.addEventListener("keyup", (e) => {
   for (let btn of keys) {
     if (btn.innerHTML === e.key) {
       game.handleInteraction(btn);
     }
   }
 });

 function getRndColor() {
   return "hsl(" + 360 * Math.random() + ",50%,50%)";
 }

 const printQuote = () => {
  let body = document.querySelector('body')
  body.style.backgroundColor = getRndColor();
 }

 setInterval(printQuote, 10000);
