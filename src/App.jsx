import { useState } from 'react'
import { generate } from "random-words";
import './App.css'

import AlphabetButtons from './components/Alphabet-buttons'
import Hangman from './components/Hangman'
import Result from './components/Result'
import WordDisplay from './components/Word-display'
import Title from './components/Title'

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


function App() {

  const [guesses, setGuesses] = useState({correct: 0, incorrect: 0})
  const [letters, setLetters] = useState([])
  const [gameOver, setGameOver] = useState(true)
  const [word, setWord] = useState("")
  const [disabledKeys, setDisabledKeys] = useState([]);

  const correct = (letter, numOfTimes) => {
    setGuesses((currGuesses) => {
      currGuesses.correct += numOfTimes
      return {...currGuesses}
    })
    setLetters((currLetters) => {
      return [letter, ...currLetters]
    })
  }

  const incorrect = () => {
    setGuesses((currGuesses) => {
      currGuesses.incorrect++
      return {...currGuesses}
    })
  }

  const addKeys = (key) => {
    setDisabledKeys([...disabledKeys, key])
  }

  const gameFinished = () => {
    setGameOver(true)

  }

  const gameStart = (difficulty) => {
    setGameOver(false)
    setGuesses({correct: 0, incorrect: 0})
    setLetters([''])
    setDisabledKeys([])

    const pointSystem = { 1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'], 2: ['D', 'G'], 3: ['B', 'C', 'M', 'P'], 4: ['F', 'H', 'V', 'W', 'Y'], 5: ['K'], 8: ['J', 'X'], 10: ['Q', 'Z'] }
    let range = getRandomInt(3)
    let possibleWords = generate(50)

    function calculateScore(word) {
      let score = 0;
      for (let letter of word.toUpperCase()) {
        for (let [points, letters] of Object.entries(pointSystem)) {
          if (letters.includes(letter)) {
            score += Number(points);
          }
        }
      }
      return score;
    }
    possibleWords.sort((a, b) => calculateScore(a) - calculateScore(b));

    if (difficulty === 'Easy') {
      console.log(possibleWords[range])
      setWord(possibleWords[range]);
    } else if (difficulty === 'Medium') {
      setWord(possibleWords[range + 20]);
    } else if (difficulty === 'Hard') {
      setWord(possibleWords[range + 40]);
    }
  }

  return (
    <>
      <Title />
      <Hangman word={word} guesses={guesses} gameOver={gameOver}/>
      <WordDisplay word={word} letters={letters} gameOver={gameOver}/>
      <AlphabetButtons word={word} disabledKeys={disabledKeys} correct={correct} incorrect={incorrect} gameOver={gameOver} addKeys={addKeys}/>
      <Result word={word} guesses={guesses} gameFinished={gameFinished} gameStart={gameStart}/>
    </>
  )
}

export default App
