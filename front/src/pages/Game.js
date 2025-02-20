import React, { useState, useEffect } from 'react';
import { getWords } from '../support/Api';

import GuessRow from '../components/GuessRow';
import '../css/App.css';
import EndGameOverlay from '../components/EndGameOverlay';
import Header from '../components/Header';
import AlphabetDisplay from '../components/AlphabetDisplay';

function Game() {
  const [guesses, setGuesses] = useState(Array(6).fill('')); // 6 guesses
  const [currentGuess, setCurrentGuess] = useState('');
  const currentRowIndex = guesses.findIndex(guess => !guess);
  const [gameStatus, setGameStatus] = useState('playing');

  const [remainingLetters, setRemainingLetters] = useState("AEIOUBCDFGHJKLMNPQRSTVWXYZ".split(''));
  const [word, setWord] = useState('');
  const [tidBit, setTidBit] = useState('');


  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Start loading
      try {
        const fetchedData = await getWords(); // Assuming getWords returns the word and tidbit
        if (fetchedData && fetchedData.length > 0) {
          setWord(fetchedData[0].word);
          setTidBit(fetchedData[0].tidbit);
        }
      } catch (error) {
        setError(error.message)
        console.error('Error fetching word and tidbit:', error);
        // Handle the error as you see fit
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const getLetterFrequencies = (word) => {
    return word.split('').reduce((acc, letter) => {
      acc[letter] = (acc[letter] || 0) + 1;
      return acc;
    }, {});
  };

  const updateRemainingLetters = (guessResult) => {
    const incorrectLetters = guessResult
      .filter(guess => guess.status === 'absent')
      .map(guess => guess.letter);
  
    const newRemaining = remainingLetters.filter(letter => !incorrectLetters.includes(letter));
    setRemainingLetters(newRemaining);
  };

  const handleGuessChange = (event, index) => {
    const newGuess = currentGuess.split('');
    newGuess[index] = event.target.value.toUpperCase();
    setCurrentGuess(newGuess.join(''));
  };

  // Placeholder for submit guess logic
  const submitGuess = () => {
    if (currentGuess.length === word.length) {
      const wordFrequencies = getLetterFrequencies(word);
      const guessResult = currentGuess.split('').map((letter, index) => {
        if (letter === word[index]) {
          wordFrequencies[letter]--;
          return { letter, status: 'correct' };
        }
        return { letter, status: null }; // Temporarily set status to null
      });
  
      guessResult.forEach(guess => {
        if (guess.status === null) {
          if (word.includes(guess.letter) && wordFrequencies[guess.letter] > 0) {
            guess.status = 'present';
            wordFrequencies[guess.letter]--;
          } else {
            guess.status = 'absent';
          }
        }
      });

      const newGuesses = [...guesses];
      newGuesses[currentRowIndex] = guessResult;
      setGuesses(newGuesses);
  
      if (currentGuess === word) {
        setGameStatus('won');
      } else if (currentRowIndex === guesses.length - 1) {
        setGameStatus('lost');
      } else {
        setCurrentGuess('');
        updateRemainingLetters(guessResult);
      }
    } else {
      alert("Please fill out all squares with normal letters!");
    }
  };

  const onRestart = () => {
    window.location.reload(); // Or any other logic to reset the game
    setRemainingLetters("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')); // Reset the alphabet
  };
  
  if (isLoading) {
    return (
    <div className='App'>
      <Header />
      <div style={{color: 'white', fontSize:"30px"}}>Loading... This may Take a minute (no seriously, like sometimes a real minute) for the free server to "Spin Up"</div>
    </div>
  )} 
  
  
  else if(error){
    <div className='App'>
      <Header />
      <div>Error: {error}</div>
    </div>
  } 
  
  else{ //Normal Loaded screen
    return (
      <div className="App">
        <Header />
        <AlphabetDisplay remainingLetters={remainingLetters} />
        {word &&  //make sure we have the word before we set the grid
        <div className="guess-grid">
          {guesses.map((guess, index) => (
            <GuessRow
              key={index}
              guessResult={guess}
              currentGuess={index === currentRowIndex ? currentGuess : ''}
              onGuessChange={handleGuessChange}
              isCurrent={index === currentRowIndex}
              word = {word}
              submitGuess={submitGuess}
            />
          ))}
        </div>
        }
        <button onClick={submitGuess}>Submit Guess</button>

        {gameStatus !== 'playing' && (
          <EndGameOverlay
            status={gameStatus}
            tidBit={tidBit}
            onRestart={onRestart}
          />
        )}  
      </div>
        );
      }
}

export default Game;