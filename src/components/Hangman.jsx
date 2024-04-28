function Hangman ({word, guesses, gameOver}) {
  console.log(gameOver)
    const hangmanParts = [
      `
      +---+
          |
          |
          |
          |
          |
    =========
        `,
        `
      +---+
      |   |
          |
          |
          |
          |
    =========
        `,
        `
      +---+
      |   |
      O   |
          |
          |
          |
    =========
        `,
        `
      +---+
      |   |
      O   |
      |   |
          |
          |
    =========
        `,
        `
      +---+
      |   |
      O   |
     /|   |
          |
          |
    =========
        `,
        `
      +---+
      |   |
      O   |
     /|\\  |
          |
          |
    =========
        `,
        `
      +---+
      |   |
      O   |
     /|\\  |
     /    |
          |
    =========
        `,
        `
      +---+
      |   |
      O   |
     /|\\  |
     / \\  |
          |
    =========
        `,
    ];
    return (
      <div class="hangman-container">
        <pre>{hangmanParts[guesses.incorrect]}</pre>
        <div className="overlay-box" style={{
          transition: gameOver ? 'opacity 3s ease-in-out' : 'none',
          opacity: gameOver ? 100 : 0,
        }}>
          { word.length === 0 ? ( 
            null
          ) : guesses.correct === word.length ? (
            <p>Winner 🥳</p>
          ) : guesses.incorrect >= 7 ? (
            <p>Loser 😓</p>
          ) : null }
        </div>
      </div>
    )
}

export default Hangman