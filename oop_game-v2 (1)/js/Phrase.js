class Phrase {
    constructor(phrase) {
      this.phrase = phrase.toLowerCase();
    }
  
    addPhraseToDisplay() {
      const phraseList = document.getElementById('phrase').firstElementChild;
      phraseList.innerHTML = '';
  
      for (const character of this.phrase) {
        const li = document.createElement('li');
        if (character === ' ') {
          li.className = 'space';
        } else {
          li.className = `hide letter ${character}`;
          li.textContent = character;
        }
        phraseList.appendChild(li);
      }
    }
  /**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/

    checkLetter(letter) {
      return this.phrase.includes(letter);
    }
  /**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/
    showMatchedLetter(letter) {
      const matchedLetters = document.querySelectorAll(`.letter.${letter}`);
      matchedLetters.forEach((element) => {
        element.classList.remove('hide');
        element.classList.add('show');
      });
    }
  }
  