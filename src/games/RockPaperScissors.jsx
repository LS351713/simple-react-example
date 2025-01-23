import { useState } from 'react'
// important greeting from "./Greeting"


const choices = ['Rock', 'Paper', 'Scissors'];
 
   const Header = ({title, instruction}) =>{
    title = "Rock, Paper, Scissors";
    return (
    <div>
    <h1>{title}</h1>
     <p className="instructions">{instruction}</p>
     <p className="prompt">{prompt}</p>
    </div>
  );
};

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

const Choices = ({choices, onPlayerChoice}) => {
return (
    <div className="choices">
     {choices.map((choice,index) => (
        <button key = {index} onClick= {() => onPlayerChoice(choice)}>{choice.name}{choice.icon}</button>
       ))}
    </div>
);
};
 
const Result = ({result}) => {
  if (!result) {
    return <div id="result"><h2>No result yet!</h2></div>
  }
  return (
    <div id="result">
    <p>{result.player}</p>
    <p>{result.computer}</p>
   <h2>{result.outcome}</h2>
  </div>
  );
};

const getComputerChoice = () => {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};


const RockPaperScissors = ({updateScores, onSetGameResult}) => {
   
  // const choices = ['Rock', 'Paper', 'Scissors'];
  const choices = [
    {name: 'Rock', icon: '✊'},
    {name: 'Paper', icon:'✋'},
    {name: 'Scissors', icon: '✌'},
    ];
    const [result, setResult] = useState(null);
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [winner, setWinner] = useState.apply(null);
    
   
    const determineWinner = (playerChoice, computerChoice) => {
      if (playerChoice === computerChoice) {
        setWinner("Tie");
        updateScores("Tie")
        onSetGameResult ("Tie");
        return "It's a tie!";
      }
      if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
      ) {
        setPlayerScore(playerScore + 1);
        setWinner("Player");
        onSetGameResult ("Player");
        updateScores("Player");
        return "You win!";
      }
      setComputerScore(computerScore + 1);
      setWinner("Computer");
      onSetGameResult ("Computer");
      updateScores("Computer")
        return "Computer wins!";
    };



// let playerScore = 2;
// let computerScore = 1;

const handlePlayerScore = (playerScore) => {
  const handleComputerScore = getComputerScore();
  const score = playerScore 

} 
    // let playerScore = 0;
    // let computerScore = 0;

const handlePlayerChoice = (playerChoice) => {
  const computerChoice = getComputerChoice();
  const gameResult = determineWinner(playerChoice.name, computerChoice)
  console.log (`Player chose: ${playerChoice.name}`);
  console.log(`Computer chose: ${computerChoice}`);
  setResult({
    player: `Player chose: ${playerChoice.name}`,
    computer: `Computer chose: ${computerChoice}`,
    outcome: gameResult
  });
  console.log(result);
  console.log(playerScore, computerScore)
};

  return (
    <div>
      <Header 
      title  = "Rock-Paper-Scissors Game"
      instruction = "Choose Rock, Paper, or Scissors to play against the computer!"
      prompt = "Choose an option!"
      />
      <Scoreboard 
    playerScore = {playerScore}
    computerScore = {computerScore}
      winner = {winner}/>
      <Choices choices = {choices} onPlayerChoice ={handlePlayerChoice}/>
      <Result result = {result}/>
      <button id="reset">Reset Game</button>
    </div>
);
    
 }
 export default RockPaperScissors;