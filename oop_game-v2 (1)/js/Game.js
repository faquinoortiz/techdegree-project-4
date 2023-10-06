//TechdegreeProject 4- Flor Aquino Ortiz//


//Constructor + class and list of array of phrase in addition to the initial activPhrase null
class Game {
    constructor() {
      this.missed = 0;
      this.phrases = [
        new Phrase('You got this'),
        new Phrase(' Get Intuit'),
        new Phrase('The best is yet to come'),
        new Phrase('Throw away the Key'),
        new Phrase('Girls run the world')
      ];
  
      this.activePhrase = null;
  
      //F
      this.lostHeartImage = new Image();
      this.lostHeartImage.src = 'images/lostHeart.png';
  
      this.livesHeartImage = new Image();
      this.livesHeartImage.src = 'images/livesHeart.png';
    }
  // Function to run random phrase
    getRandomPhrase() {
      const randomIndex = Math.floor(Math.random() * this.phrases.length);
      return this.phrases[randomIndex];
    }
  // Will start the game and also set the intial re-set of the
    startGame() {
      const overlay = document.getElementById('overlay');
      overlay.style.display = 'none';
      this.resetGameBoard();
  
      this.activePhrase = this.getRandomPhrase();
      this.activePhrase.addPhraseToDisplay();
    }
  /*Checking if the player has clicked on the write letter and classifying 
  it as right or wrong depending on whether the letter is part of the phrase*/
    handleInteraction(event, letter) {
      const button = event.target;
  
      if (button && !button.disabled) {
        button.disabled = true;
  
        if (this.activePhrase.checkLetter(letter)) {
          button.classList.add('chosen');
          this.activePhrase.showMatchedLetter(letter);
          if (this.checkForWin()) {
            this.gameOver(true);
          }
        } else {
          button.classList.add('wrong');
          this.removeLife();
        }
      }
    }
    /* Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
      const hiddenLetters = document.querySelectorAll('.letter.hide');
      return hiddenLetters.length === 0;
    }
  /**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/

    removeLife() {
      const hearts = document.querySelectorAll('.tries img');
      if (this.missed >= 0 && this.missed < 5) {
        hearts[this.missed].src = this.lostHeartImage.src;
        this.missed++;
  
        if (this.missed >= 5) {
          this.gameOver(false);
        }
      }
    }
 
    /* Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    gameOver(gameWon) {
      const overlay = document.getElementById('overlay');
      overlay.style.display = 'flex';
      const gameOverMessage = document.getElementById('game-over-message'); // Corrected ID
  
      if (gameWon) {
        overlay.className = 'win';
        gameOverMessage.textContent = 'Winner, winner chicken dinner';
      } else {
        overlay.className = 'lose';
        gameOverMessage.textContent = 'You snooze, you lose. Try again!';
      }
    }
  // Resets GameBoard 
    resetGameBoard() {
      const phraseUL = document.querySelector('#phrase ul');
      phraseUL.innerHTML = '';
  
      const hearts = document.querySelectorAll('.tries img');
      hearts.forEach(heart => {
        hearts.src = this.livesHeartImage.src;
      });
  
      const keys = document.querySelectorAll('.key');
      keys.forEach((key) => {
        key.classList.remove('chosen', 'wrong');
        key.disabled = false;
      });
  
      this.missed = 0;
    }
  }
  
  // Event listeners to launch button and reset the game to play again
  document.getElementById('btn__reset').addEventListener('click', () => {
    const game = new Game();
    game.startGame();
  });
  
  document.getElementById('qwerty').addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
      const letter = event.target.textContent;
      game.handleInteraction(event, letter);
    }
  });