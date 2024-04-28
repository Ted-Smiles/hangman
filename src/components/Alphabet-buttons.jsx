function AlphabetButtons ({ word, correct, incorrect, gameOver }) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    
    function handleClick(e) {
        const clickedLetter = e.target.innerText

        const sepWord = word.split("")

        let letterInWord = 0

        sepWord.forEach(letter => {
            if (clickedLetter === letter) {
                console.log("true")
                letterInWord++
                correct(clickedLetter)
            } 
        });
        if (letterInWord === 0) {
            console.log("false")
            incorrect()
        }
        e.target.disabled = true
    }

    return (
        <>
            {alphabet.map((letter, index) => {
                return (
                    <button key={index} onClick={handleClick} disabled={gameOver}>{letter}</button>
                )
            })}
        </>
    )
}

export default AlphabetButtons