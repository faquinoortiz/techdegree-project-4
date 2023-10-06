//const phrase = new Phrase ();
//const game = new Game ();
let game;
document.getElementById('btn__reset').addEventListener('click',function (){
    game = new Game();
    game.startGame();

});
