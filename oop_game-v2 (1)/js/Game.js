class Game {
    constructor(){
    this.missed = 0;
    this.phrases = [
    
   new Phrase('You got this'),
   new Phrase(' Get Intuit') ,
   new Phrase ('The best is yet to come'),
   new Phrase ('Throw away the Key'),
   new Phrase ('Girls run the world')
    ];

    this.activePhrase = null;

}
getRandomPhrase(){
        const randomIndex = Math.floor(Math.random()* this.phrases.length);
        return this.phrases[randomIndex];
    
}

startGame (){
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';

    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
}


handleInteraction(letter){
   
    const button = document.querySelector(`.key:contains(${letter})`);
    button.disabled = true;

if (this.activePhrase.checkLetter(letter)){

button.classList.add('chosen');
this.activePhrase.showMatchedLetter(letter);
if (this.checkForWin()){
    
    this.gameOver(true)
}

} else {
  button.classList.add('wrong');
  this.removeLife();
    }
}
/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
checkForWin(){
    const hiddenLetters = document.querySelectorAll('.letter.hide');
    return hiddenLetters.length === 0;
}
/**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/

removeLife(){

    const hearts = document.querySelectorAll('.tries img');
    hearts[this.missed ].src ='images/lostHeart.png';
    this.missed++;
if(this.missed === 5) {
   this.gameOver(false);
    }
}

/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
gameOver(gameWon){
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'flex'
    const gameOverMessage = document.getElementById('overlay');

   if (gameWon) {
    overlay.className ='win';
    gameOverMessage.textContent = 'Winner, winner chicken dinner';
   }else{
     overlay.className = 'lose';
     gameOverMessage.textContent = 'You snooze, you lose. Try again!';
    }
   }
}