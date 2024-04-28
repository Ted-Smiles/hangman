function WordDisplay ({ word, letters, gameOver }) {
    const sepWord = word.split("")
    return (
        <div className="container">
            <div className="word">
                {sepWord.map((character) => {
                    if (letters.includes(character) || gameOver === true) {
                        return <p>{character}</p>
                    } else {
                        return <p>_</p>
                    }
                })}
            </div>
        </div>
    )
}

export default WordDisplay