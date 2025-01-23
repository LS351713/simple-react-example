const Scoreboard = ({playerScore, computerScore, winner}) => {
    if (winner === "Player"){
  return (
    <div id="scoreboard">
          <p>Player Score: <span id="player-score">{playerScore} Winner!</span></p>
          {/* if else { */}
            <p>Computer Score: <span id="computer-score">{computerScore}</span></p>
          
          {/* <p>Computer Score: <span id="computer-score">{computerScore}</span></p> */}
        </div>
  );
    } else if (winner ==="Computer"){
      return (
        <div id="scoreboard">
          <p>Player Score: <span id= "player-score">{playerScore}</span></p>
          <p>Computer Score: <span id="computer-score">{computerScore} Winner!</span></p>
        </div>
      );
    } else {
      return (
        <div id="scoreboard">
          <p>Player Score: <span id= "player-score">{playerScore}</span></p>
          <p>Computer Score: <span id="computer-score">{computerScore}</span></p>
        </div>
      );
    }
  };

  export default Scoreboard;