import React, { useRef, useEffect } from 'react';

function GuessRow({ guessResult, onGuessChange, isCurrent, currentGuess, word }) {
    const placeholders = Array(word.length).fill('');
    const inputRefs = useRef(placeholders.map(() => React.createRef()));
  
    useEffect(() => {
      if (isCurrent && inputRefs.current[0]) {
        inputRefs.current[0].current.focus();
      }
    }, [isCurrent]);
  
    const handleChange = (e, index) => {
      if (isCurrent && onGuessChange) {
        onGuessChange(e, index);
        if (e.target.value && index < placeholders.length - 1) {
          inputRefs.current[index + 1].current.focus();
        }
      }
    };
  
    const handleKeyDown = (e, index) => {
      if (e.key === 'Backspace' || e.key === 'Delete') {
        if (index > 0 && !e.target.value) {
          inputRefs.current[index - 1].current.focus();
        }
      }
    };
  
    return (
      <div className="guess-row">
        {placeholders.map((_, index) => {
          const value = guessResult ? guessResult[index].letter : (isCurrent ? currentGuess[index] : '');
          const status = guessResult ? guessResult[index].status : '';
          
          return (
            <input
              key={index}
              ref={inputRefs.current[index]}
              className={`letter-box ${status}`}
              maxLength="1"
              value={value}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              disabled={!isCurrent || guessResult}
            />
          );
        })}
      </div>
    );
  }

  export default GuessRow