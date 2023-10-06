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
startGame (){
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';

    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
}

getRandomPhrase(){
    const randomIndex = Math.floor(Math.random()* this.phrases.length);
    return this.phrases[randomIndex];
}
}
