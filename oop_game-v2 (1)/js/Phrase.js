class Phrase {
    constructor(phrase){
    this.phrase = phrase.toLowerCase();
}
addPhraseToDisplay() {
    const phraseDiv = document.getElementById('phrase');
    const ul = phraseDiv.firstElementChild;
    const phraseListItems = ul.children;

    for (let i = 0; i < this.phrase.length; i++) {
        const character = this.phrase[i];
        const li = document.createElement ('li');
        if (character ===' '){
            li.className = 'hide space';
            li.textContent = '_'
        } else {
            li.className = `hide letter ${character}`;
            li.textContent = '_';

        }
        ul.appendChild(li);
    }
  }

  showMatchedLetter(letter){
    const phraseDiv = document.getElementById('phrase');
    const phraseListItems = phraseDiv.firstElementChild.children;

    for (let i=0; i < phraseListItems.length; i++){
        if (phraseListItems[i].textContent === letter){
            phraseListItem[i].classList.remove('hide');
            phraseListItem[i].classList.add('show');
            phraseListItem[i].textContent = letter; 


    }
  }
}
}