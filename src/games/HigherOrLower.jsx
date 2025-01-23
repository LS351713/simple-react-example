import React, { useState } from "react";

const Result = ({ result }) => {

if (!result) {
return <div id="result"><h2>No result yet!</h2></div>;
}
return (
 <div id="result">
 <h2>{result}</h2>
 </div>
);
};

const HigherOrLower = ({updateScores, onSetGameResult}) => {
const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const [currentNumber, setCurrentNumber] = useState(generateRandomNumber());
const [result, setResult] = useState(null);
const handleGuess = (guess) => {
    const newNumber = generateRandomNumber();
    if (guess == "higher" && newNumber > currentNumber) {
        setResult("You guessed correctly!")
        onSetGameResult("You guessed correctly!");
        console.log("You guessed correctly!");
  } else if (guess == "lower" && newNumber < currentNumber) {
    setResult("You guessed correctly!");
    onSetGameResult("You guessed correctly!");
    console.log("You guessed correctly!");
} else {
    setResult("You guessed wrong!")
    onSetGameResult("You guessed wrong!");
    console.log("You guessed wrong!");
}
setCurrentNumber(newNumber);
}

return (
<div>
 <h1>Higher or Lower</h1>
 <p>Current Number: {currentNumber}</p>
 <div>
 <button onClick={() => handleGuess("higher")}>Higher</button>
 <button onClick={() => handleGuess("lower")}>Lower</button>
</div>
<Result result={result}/>
</div>
);
};
export default HigherOrLower;