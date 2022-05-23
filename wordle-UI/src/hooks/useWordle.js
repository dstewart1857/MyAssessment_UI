import { useState } from "react";

const useWordle = (word) => {
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState("");
    const [guesses, setGuesses] = useState([...Array(6)]);
    const [history, setHistory] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);
    const [usedKeys, setUsedKeys] = useState({});


    const formatGuess = () => {
        let wordArray = [...word];
        let formattedGuess = [...currentGuess].map((letter) => {
            return ({ key: letter, color: 'grey' });
        });

        formattedGuess.forEach((letterObject, index) => {
            if (wordArray[index] === letterObject.key) {
                formattedGuess[index].color = 'green';
                wordArray[index] = null;
            };
        });

        formattedGuess.forEach((letter, index) => {
            if (wordArray.includes(letter.key) && letter.color !== 'green') {
                formattedGuess[index].color = 'blue';
                wordArray[wordArray.indexOf(letter.key)] = null;
            };
        });

        return formattedGuess;

    };

    const addNewGuess = (formattedGuess) => {
        if (currentGuess === word) {
            setIsCorrect(true);
        }

        setGuesses((prevGuesses) => {
            let newGuesses = [...prevGuesses];
            newGuesses[turn] = formattedGuess;
            return (newGuesses);
        });

        setHistory((prevHistory) => {
            return ([...prevHistory, currentGuess]);
        });

        setTurn((prevTurn) => {
            return (prevTurn + 1);
        });

        setUsedKeys((prevUsedKeys) => {
            let newKeys = { ...prevUsedKeys }

            formattedGuess.forEach((letter) => {
                const currentColor = newKeys[letter.key];

                if (letter.color === 'green') {
                    newKeys[letter.key] = 'green';
                    return;
                }

                if (letter.color === 'blue' && currentColor !== 'green') {
                    newKeys[letter.key] = 'blue';
                    return;
                }

                if (letter.color === 'grey' && currentColor !== 'green' && currentColor !== 'blue') {
                    newKeys[letter.key] = 'grey';
                    return;
                }

            });

            return newKeys;

        });

        setCurrentGuess('');
    };

    const handleKeyUp = ({ key }) => {
        if (key === "Enter") {
            if (turn > 5) {
                console.log("you used all your guesses");
                return;
            }

            if (history.includes(currentGuess)) {
                console.log("you already tried that word");
                return;
            }

            if (currentGuess.length !== 5) {
                console.log("word must be 5 chars long");
                return;
            }

            const formattedGuess = formatGuess();
            addNewGuess(formattedGuess);
        }

        if (key === "Backspace") {
            setCurrentGuess((prev) => {
                return prev.slice(0, -1);
            });
            return;
        }

        if (/^[A-Za-z]$/.test(key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess((prev) => {
                    return prev + key.toLowerCase();
                });
            }
        }
    };

    return { turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyUp };
};

export default useWordle;
