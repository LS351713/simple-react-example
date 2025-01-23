import { useState } from 'react'
let wordList = [
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Anteater",
    "Antelope",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Boar",
    "Buffalo",
    "Butterfly",
    "Camel",
    "Capybara",
    "Caribou",
    "Cassowary",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Woodpecker",
    "Worm",
    "Yak",
    "Zebra"
];

const randomSecretWord = () => {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    // return wordList(randomIndex.toLowerCase());
    // return wordList(5);
}

const Keyboard = ({onBtnClick}) => {
    const buttons = "abcdefghijklmnopqrstuvwxyz".split('');
    return (
        <p className="hangman-keyboard">
        {buttons.map((letter)=>{
            return (
                <button className="hangman-button" onClick={onBtnClick} key={letter} value={letter}>{letter}</button>
            )
        })}
        </p>
        )
};


const Hangman = () => {
    const [secretWord, setSecretWord] = useState(randomSecretWord());

    const handleClick = (event) => {
        const guessedLetter = event.target.value.toLowerCase();
        console.log(guessedLetter);
        console.log(secretWord);

    };

    return(
        <div>
            <h1>Hangman Game</h1>
            <br />
            <Keyboard onBtnClick={handleClick}/>

        </div>
    )
};

export default Hangman;



