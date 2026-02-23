import { useCallback, useEffect, useState } from 'react';
import { getWords } from '../support/Api';

import AlphabetDisplay from '../components/AlphabetDisplay';
import EndGameOverlay from '../components/EndGameOverlay';
import GuessRow from '../components/GuessRow';
import Header from '../components/Header';
import '../css/App.css';

// ── Toast ──────────────────────────────────────────────────────────
let toastTimeout = null;

function useToast() {
  const [toast, setToast] = useState(null); // { message, type }

  const showToast = useCallback((message, type = 'info') => {
    setToast(null);
    clearTimeout(toastTimeout);
    // small delay so re-triggers re-animate
    toastTimeout = setTimeout(() => {
      setToast({ message, type });
      toastTimeout = setTimeout(() => setToast(null), 2800);
    }, 20);
  }, []);

  return { toast, showToast };
}

// ── Helpers ────────────────────────────────────────────────────────
function getLetterFrequencies(word) {
  return word.split('').reduce((acc, letter) => {
    acc[letter] = (acc[letter] || 0) + 1;
    return acc;
  }, {});
}

// ── Component ──────────────────────────────────────────────────────
function Game() {
  const [guesses, setGuesses]               = useState(Array(6).fill(''));
  const [currentGuess, setCurrentGuess]     = useState('');
  const [gameStatus, setGameStatus]         = useState('playing');
  const [rowStates, setRowStates]           = useState(Array(6).fill(null));
  const [remainingLetters, setRemainingLetters] = useState(
    "AEIOUBCDFGHJKLMNPQRSTVWXYZ".split('')
  );
  const [word, setWord]       = useState('');
  const [tidBit, setTidBit]   = useState('');
  const [dict, setDict]       = useState(new Set());
  const [wildGuess, setWildGuess] = useState(2);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError]     = useState(null);

  const { toast, showToast } = useToast();

  const currentRowIndex = guesses.findIndex(guess => !guess);

  // ── Fetch word ──
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const data = await getWords();
        if (data && data.length > 0) {
          setWord(data[0].word);
          setTidBit(data[0].tidbit);
        }
      } catch (err) {
        setError(err.message);
        console.error('Error fetching word:', err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  // ── Fetch dictionary ──
  useEffect(() => {
    (async () => {
      try {
        const res  = await fetch('/words.txt');
        const text = await res.text();
        const wordSet = new Set(
          text.split('\n').map(w => w.trim().toLowerCase()).filter(Boolean)
        );
        setDict(wordSet);
      } catch (err) {
        console.error('Error loading dictionary:', err);
      }
    })();
  }, []);

  // ── Helpers ──
  const updateRemainingLetters = (guessResult) => {
    const absentLetters = guessResult
      .filter(g => g.status === 'absent')
      .map(g => g.letter);
    setRemainingLetters(prev => prev.filter(l => !absentLetters.includes(l)));
  };

  const handleGuessChange = (event, index) => {
    const newGuess = currentGuess.split('');
    newGuess[index] = event.target.value.toUpperCase();
    setCurrentGuess(newGuess.join(''));
  };

  // ── Animate a row ──
  const triggerRowState = (index, state) => {
    setRowStates(prev => {
      const next = [...prev];
      next[index] = state;
      return next;
    });
    setTimeout(() => {
      setRowStates(prev => {
        const next = [...prev];
        next[index] = null;
        return next;
      });
    }, 700);
  };

  // ── Submit ──
  const submitGuess = useCallback(() => {
    if (currentGuess.length !== word.length) {
      showToast(`Word must be ${word.length} letters`, 'warn');
      triggerRowState(currentRowIndex, 'shake');
      return;
    }

    if (!dict.has(currentGuess.toLowerCase())) {
      if (wildGuess === 0) {
        showToast('Not a valid word — no wild guesses left!', 'error');
        triggerRowState(currentRowIndex, 'shake');
        return;
      }
      const next = wildGuess - 1;
      setWildGuess(next);
      showToast(
        `Wild guess used! ${next} wild guess${next === 1 ? '' : 'es'} left.`,
        'warn'
      );
    }

    const wordFreq = getLetterFrequencies(word);

    // First pass: mark correct positions
    const guessResult = currentGuess.split('').map((letter, i) => {
      if (letter === word[i]) {
        wordFreq[letter]--;
        return { letter, status: 'correct' };
      }
      return { letter, status: null };
    });

    // Second pass: present / absent
    guessResult.forEach(guess => {
      if (guess.status === null) {
        if (word.includes(guess.letter) && wordFreq[guess.letter] > 0) {
          guess.status = 'present';
          wordFreq[guess.letter]--;
        } else {
          guess.status = 'absent';
        }
      }
    });

    const newGuesses = [...guesses];
    newGuesses[currentRowIndex] = guessResult;
    setGuesses(newGuesses);

    if (currentGuess === word) {
      triggerRowState(currentRowIndex, 'bounce');
      setTimeout(() => setGameStatus('won'), 600);
    } else if (currentRowIndex === guesses.length - 1) {
      setGameStatus('lost');
    } else {
      setCurrentGuess('');
      updateRemainingLetters(guessResult);
    }
  }, [currentGuess, word, dict, wildGuess, guesses, currentRowIndex, showToast]);

  const onRestart = () => {
    window.location.reload();
  };

  // ── Render states ──
  if (isLoading) {
    return (
      <div className="App">
        <Header />
        <div className="loading-screen">
          <div className="loading-dots">
            <span /><span /><span />
          </div>
          <p>Fetching today's word…</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="App">
        <Header />
        <div className="error-screen">
          <p>Couldn't load the game: {error}</p>
        </div>
      </div>
    );
  }

  // ── Wild badge pips ──
  const pips = Array(2).fill(null).map((_, i) => (
    <span key={i} className={i < wildGuess ? 'active' : ''} />
  ));

  const wildClass = wildGuess === 0 ? 'zero' : wildGuess === 1 ? 'low' : '';

  return (
    <div className="App">
      <Header />

      {/* Sticky alphabet — stays visible as user scrolls down on mobile */}
      <AlphabetDisplay remainingLetters={remainingLetters} />

      <div className="game-content">
        {/* Wild guess indicator */}
        <div className={`wild-badge ${wildClass}`}>
          <div className="wild-pip">{pips}</div>
          Wild guess{wildGuess === 1 ? '' : 'es'}: {wildGuess}
        </div>

        {/* Toast */}
        {toast && (
          <div className={`toast ${toast.type}`} key={toast.message + Date.now()}>
            {toast.message}
          </div>
        )}

        {/* Guess grid */}
        {word && (
          <div className="guess-grid">
            {guesses.map((guess, index) => (
              <GuessRow
                key={index}
                guessResult={guess || null}
                currentGuess={index === currentRowIndex ? currentGuess : ''}
                onGuessChange={handleGuessChange}
                isCurrent={index === currentRowIndex}
                word={word}
                submitGuess={submitGuess}
                rowState={rowStates[index]}
              />
            ))}
          </div>
        )}

        <button className="submit-btn" onClick={submitGuess}>
          Submit
        </button>
      </div>

      {gameStatus !== 'playing' && (
        <EndGameOverlay
          status={gameStatus}
          tidBit={tidBit}
          word={word}
          onRestart={onRestart}
        />
      )}
    </div>
  );
}

export default Game;