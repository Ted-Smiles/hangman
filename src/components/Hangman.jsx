function Hangman ({guesses}) {
    const hangmanParts = [
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
        <pre>{hangmanParts[guesses.incorrect]}</pre>
    )
}

export default Hangman