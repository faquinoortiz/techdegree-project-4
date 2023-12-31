let game; 

document.addEventListener('DOMContentLoaded', () => {
  // Create a new Game object
  game = new Game();

  // Start the game when the "Start Game" button is clicked
  document.getElementById('btn__reset').addEventListener('click', () => {
    game.startGame();
  });

  // Handle on-screen keyboard button clicks using event delegation
  const keyboardContainer = document.getElementById('qwerty');
  keyboardContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('key')) {
      const letter = event.target.textContent;
      game.handleInteraction(event, letter);
    }
  });
});