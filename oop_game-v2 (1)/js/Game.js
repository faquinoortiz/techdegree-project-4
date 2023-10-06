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
    const button = document.querySelector(`button.key:disabled[data-letter="${letter}"]`);

    if(!button){
      return;
    }
const isLetterInPhrase = this.activePhrase.checkLetter(letter);

button.setAttribute('disabled', true);

if (isLetterInPhrase){
    this.activePhrase.showMatchedLetter(letter);
if (this.checkForWin()){
    this.gameOver(true);
}

} else {
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
    this.missed++ ;
    const hearts = document.querySelectorAll('.tries img');
    hearts[this.missed - 1].src ='images/lostHeart.png';
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