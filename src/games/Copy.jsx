import { useState } from 'react';

const wordList = [
    "Albatross", "Alligator", "Alpaca", "Ant", "Anteater", "Antelope", "Ape", "Armadillo",
    "Donkey", "Baboon", "Badger", "Barracuda", "Bat", "Bear", "Beaver", "Bee", "Bison",
    "Boar", "Buffalo", "Butterfly", "Camel", "Capybara", "Caribou", "Cassowary", "Cat",
    "Caterpillar", "Cattle", "Chamois", "Cheetah", "Chicken", "Chimpanzee", "Chinchilla",
    "Chough", "Clam", "Cobra", "Cockroach", "Cod", "Cormorant", "Coyote", "Crab",
    "Crane", "Crocodile", "Crow", "Curlew", "Deer", "Dinosaur", "Dog", "Dogfish", "Dolphin",
    "Dotterel", "Dove", "Dragonfly", "Duck", "Dugong", "Dunlin", "Eagle", "Eel", "Eland",
    "Elephant", "Elk", "Emu", "Falcon", "Ferret", "Finch", "Fish", "Flamingo", "Fly", "Fox",
    "Frog", "Gaur", "Gazelle", "Gerbil", "Giraffe", "Gnu", "Goat", "Goldfinch", "Goldfish",
    "Goose", "Gorilla", "Grasshopper", "Gull", "Hamster", "Hare", "Hawk", "Hedgehog", "Heron",
    "Herring", "Hippopotamus", "Hornet", "Horse", "Human", "Hummingbird", "Hyena", "Ibex",
    "Ibis", "Jackal", "Jaguar", "Jay", "Jellyfish", "Kangaroo", "Kingfisher", "Koala", "Lapwing",
    "Lark", "Lemur", "Leopard", "Lion", "Llama", "Lobster", "Magpie", "Mallard", "Manatee",
    "Mandrill", "Mantis", "Marten", "Meerkat", "Mink", "Mole", "Mongoose", "Monkey", "Moose",
    "Mosquito", "Mouse", "Mule", "Narwhal", "Nightingale", "Octopus", "Okapi", "Opossum",
    "Oryx", "Ostrich", "Otter", "Owl", "Oyster", "Panther", "Parrot", "Partridge", "Peafowl",
    "Pelican", "Penguin", "Pig", "Pigeon", "Pony", "Porcupine", "Porpoise", "Quail", "Quelea",
    "Quetzal", "Rabbit", "Raccoon", "Rail", "Ram", "Rat", "Raven", "Reindeer", "Rhinoceros",
    "Rook", "Salamander", "Salmon", "Sandpiper", "Sardine", "Scorpion", "Seahorse", "Seal",
    "Shark", "Sheep", "Shrew", "Skunk", "Snail", "Snake", "Sparrow", "Spider", "Squid",
    "Squirrel", "Starling", "Stingray", "Stork", "Swallow", "Swan", "Termite", "Tiger", "Toad",
    "Trout", "Turkey", "Turtle", "Viper", "Vulture", "Wallaby", "Walrus", "Wasp", "Weasel",
    "Whale", "Wildcat", "Wolf", "Wolverine", "Wombat", "Woodcock", "Woodpecker", "Worm", "Yak", "Zebra"
];

const randomSecretWord = () => {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex].toLowerCase();
};

const Keyboard = ({ onBtnClick, disabled }) => {
    const buttons = "abcdefghijklmnopqrstuvwxyz".split('');
    return (
        <div className="hangman-keyboard">
            {buttons.map((letter) => (
                <button
                    className="hangman-button"
                    onClick={onBtnClick}
                    key={letter}
                    value={letter}
                    disabled={disabled}
                >
                    {letter}
                </button>
            ))}
        </div>
    );
};

const GuessedWord = ({ guessedWord }) => (
    <div className="hangman-word">
        {guessedWord.map((char, index) => (
            <span key={index}>{char}</span>
        ))}
    </div>
);

const Result = ({ wrongCount, gameResult }) => (
    <div className="hangman-result">
        <p>Wrong Guesses: {wrongCount}</p>
        <p>{gameResult}</p>
    </div>
);

const Hangman = () => {
    const [secretWord, setSecretWord] = useState(randomSecretWord());
    const [guessedWord, setGuessedWord] = useState(Array(secretWord.length).fill('-'));
    const [wrongCount, setWrongCount] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [message, setMessage] = useState('');

    const resetGame = () => {
        const newSecretWord = randomSecretWord();
        setSecretWord(newSecretWord);
        setGuessedWord(Array(newSecretWord.length).fill('-'));
        setWrongCount(0);
        setGameOver(false);
        setMessage('');
    };

    const handleClick = (event) => {
        if (gameOver) return;
        const guessedLetter = event.target.value.toLowerCase();

        if (secretWord.includes(guessedLetter)) {
            const updatedGuessedWord = guessedWord.map((char, index) =>
                secretWord[index] === guessedLetter ? guessedLetter : char
            );
            setGuessedWord(updatedGuessedWord);

            if (!updatedGuessedWord.includes('-')) {
                setGameOver(true);
                setMessage('Congratulations, You Won!');
            }
        } else {
            const newWrongCount = wrongCount + 1;
            setWrongCount(newWrongCount);

            if (newWrongCount >= 5) {
                setGameOver(true);
                setMessage(`Game Over! The word was: ${secretWord}`);
            }
        }
    };

    return (
        <div className="hangman">
            <h1>Hangman Game</h1>
            <GuessedWord guessedWord={guessedWord} />
            {gameOver && <Result wrongCount={wrongCount} gameResult={message} />}
            <Keyboard onBtnClick={handleClick} disabled={gameOver} />
            <button onClick={resetGame}>Reset Game</button>
        </div>
    );
};

export default Hangman;
