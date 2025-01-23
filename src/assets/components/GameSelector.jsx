const GameSelector = ({onGameSelect}) => {
  return (
    <div>
      <h2>Select a game</h2>
      <button onClick={() => onGameSelect("RockPaperScissors")}>Rock-Paper-Scissors</button>
      <button onClick={() => onGameSelect("HigherOrLower")}>Higher or Lower</button>
      <button onClick={() => onGameSelect("Hangman")}>Hangman Game</button>
      <button onClick={() => onGameSelect("Trivia")}>Trivia</button>
    </div>
  );
};
export default GameSelector;