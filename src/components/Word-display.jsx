function WordDisplay ({ word, letters, gameOver }) {
    const sepWord = word.split("")
    return (
        <div className="container">
            <div className="word">
                {sepWord.map((character, index) => {
                    if (letters.includes(character) || gameOver === true) {
                        return <p key={index}>{character}</p>
                    } else {
                        return <p key={index}>_</p>
                    }
                })}
            </div>
        </div>
    )
}

export default WordDisplay