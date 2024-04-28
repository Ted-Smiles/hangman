function Result({ word, guesses, gameFinished, gameStart }) {
  function handleClick(e) {
    const difficulty = e.target.innerText;

    gameStart(difficulty);
  }

  if (word.length === 0) {
    return (
      <div className="result">
        <h4>Choose a difficulty to play</h4>
        <button onClick={handleClick}>Easy</button>
        <button onClick={handleClick}>Medium</button>
        <button onClick={handleClick}>Hard</button>
      </div>
    );
  } else if (guesses.correct === word.length) {
    gameFinished();
    return (
      <div className="result">
        <h3>Winner 🫡</h3>
        <h4>Choose a difficulty to play</h4>
        <button onClick={handleClick}>Easy</button>
        <button onClick={handleClick}>Medium</button>
        <button onClick={handleClick}>Hard</button>
      </div>
    );
  } else if (guesses.incorrect >= 6) {
    gameFinished();
    return (
      <div className="result">
        <h3>Loser 🤪</h3>
        <h4>Choose a difficulty to play</h4>
        <button onClick={handleClick}>Easy</button>
        <button onClick={handleClick}>Medium</button>
        <button onClick={handleClick}>Hard</button>
      </div>
    );
  }
}

export default Result;
