function Result({ word, guesses, gameFinished, gameStart }) {
  function handleClick(e) {
    const difficulty = e.target.innerText;

    gameStart(difficulty);
  }

  if (word.length === 0 || guesses.correct === word.length || guesses.incorrect >= 7) {
    word.length === 0 ? null: gameFinished()
    return (
      <div className="result">
        <h4>Choose a difficulty to play</h4>
        <button onClick={handleClick}>Easy</button>
        <button onClick={handleClick}>Medium</button>
        <button onClick={handleClick}>Hard</button>
      </div>
    );
  }
}

export default Result;
