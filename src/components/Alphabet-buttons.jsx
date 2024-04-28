import { useEffect } from 'react';

function AlphabetButtons ({ word, disabledKeys, correct, incorrect, gameOver, addKeys }) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const sepWord = word.split("");
    let letterInWord = 0;

    useEffect(() => {
        function handleKeyDown(event) {
            const clickedLetter = event.key.toLowerCase();
            if (alphabet.includes(clickedLetter) && !event.repeat && !gameOver && !disabledKeys.includes(clickedLetter)) {
                sepWord.forEach(letter => {
                    if (clickedLetter === letter) {
                        letterInWord++;
                    } 
                });
                if (letterInWord === 0) {
                    incorrect();
                } else {
                    correct(clickedLetter, letterInWord);
                }
                addKeys(clickedLetter);
            }
        }

        document.addEventListener("keydown", handleKeyDown);
        
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [correct, incorrect, gameOver, addKeys, alphabet]);

    function handleClick(clickedLetter) {
        sepWord.forEach(letter => {
            if (clickedLetter === letter) {
                letterInWord++;
            } 
        });
        if (letterInWord === 0) {
            incorrect();
        } else {
            correct(clickedLetter, letterInWord);
        }
        addKeys(clickedLetter);
    }

    return (
        <>
            <h3>Use the buttons or your keyboard to try to guess the mystery word</h3>
            {alphabet.map((letter, index) => {
                return (
                    <button 
                        key={index} 
                        onClick={() => handleClick(letter)} 
                        disabled={gameOver || disabledKeys.includes(letter)}
                    >
                        {letter}
                    </button>
                )
            })}
        </>
    );
}

export default AlphabetButtons;
