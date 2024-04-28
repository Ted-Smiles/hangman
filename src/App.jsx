import { useState } from 'react'
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

  const correct = (letter) => {
    setGuesses((currGuesses) => {
      currGuesses.correct++
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

  const gameFinished = () => {
    setGameOver(true)
  }

  const gameStart = (difficulty) => {
    setGameOver(false)
    setGuesses({correct: 0, incorrect: 0})
    setLetters([''])

    if (difficulty === 'Easy') {
      const easyWords = ['dog', 'god', 'row', 'hear', 'pet']
      setWord(easyWords[getRandomInt(easyWords.length)]);
    } else if (difficulty === 'Medium') {
      const mediumWords = ['hangman', 'addict', 'pesto', 'sushi']
      setWord(mediumWords[getRandomInt(mediumWords.length)]);
    } else if (difficulty === 'Hard') {
      const hardWords = ['awkward', 'blizzard', 'bookworm', 'witchcraft', 'wristwatch', 'jawbreaker']
      setWord(hardWords[getRandomInt(hardWords.length)]);
    }
  }

  return (
    <>
      <Title />
      <Hangman guesses={guesses}/>
      <WordDisplay word={word} letters={letters} gameOver={gameOver}/>
      <AlphabetButtons word={word} correct={correct} incorrect={incorrect} gameOver={gameOver}/>
      <Result word={word} guesses={guesses} gameFinished={gameFinished} gameStart={gameStart}/>
    </>
  )
}

export default App
