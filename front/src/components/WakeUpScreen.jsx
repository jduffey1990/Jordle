import React, { useState, useEffect } from "react";
import "../css/WakeUpScreen.css";

const TRIVIA = [
  {
    q: "How many letters does a standard Wordle answer contain?",
    a: "5",
    options: ["4", "5", "6", "7"],
  },
  {
    q: "How many guesses does a player get in classic Wordle?",
    a: "6",
    options: ["4", "5", "6", "8"],
  },
  {
    q: "What color indicates a correct letter in the correct position?",
    a: "Green",
    options: ["Blue", "Yellow", "Green", "Orange"],
  },
  {
    q: "What color means the letter is in the word but in the wrong spot?",
    a: "Yellow",
    options: ["Red", "Yellow", "Gray", "Purple"],
  },
  {
    q: "Which newspaper originally published Wordle before it was acquired?",
    a: "The New York Times",
    options: ["The Guardian", "The Washington Post", "The New York Times", "The Atlantic"],
  },
  {
    q: "Who created the original Wordle game?",
    a: "Josh Wardle",
    options: ["Mark Zuckerberg", "Josh Wardle", "Evan Spiegel", "Kevin Systrom"],
  },
  {
    q: "What does the word 'lexicon' mean?",
    a: "The vocabulary of a language",
    options: ["A type of puzzle", "The vocabulary of a language", "A grammar rule", "A writing system"],
  },
  {
    q: "How many letters are in the English alphabet?",
    a: "26",
    options: ["24", "25", "26", "28"],
  },
  {
    q: "Which letter is most commonly used in the English language?",
    a: "E",
    options: ["A", "E", "S", "T"],
  },
  {
    q: "What is a five-letter word for a unit of meaning smaller than a word?",
    a: "Morph",
    options: ["Morph", "Glyph", "Trope", "Lexem"],
  },
  {
    q: "Which of these is a valid Wordle starting strategy?",
    a: "Start with vowel-heavy words like AUDIO",
    options: [
      "Start with Q words",
      "Start with vowel-heavy words like AUDIO",
      "Always guess your answer first",
      "Skip the first guess",
    ],
  },
  {
    q: "What is a pangram in linguistics?",
    a: "A sentence using every letter of the alphabet",
    options: [
      "A word that reads the same backwards",
      "A sentence using every letter of the alphabet",
      "A word with alternating vowels and consonants",
      "A phrase that sounds the same in multiple languages",
    ],
  },
  {
    q: "What do you call a word that is spelled the same forwards and backwards?",
    a: "Palindrome",
    options: ["Anagram", "Acronym", "Palindrome", "Homophone"],
  },
  {
    q: "Which of these five-letter words contains three vowels?",
    a: "OCEAN",
    options: ["STRAP", "BLUNT", "OCEAN", "CRISP"],
  },
  {
    q: "What is an anagram?",
    a: "A word formed by rearranging letters of another word",
    options: [
      "A word with double letters",
      "A word formed by rearranging letters of another word",
      "A word borrowed from another language",
      "A word with silent letters",
    ],
  },
  {
    q: "The word 'STARE' is a popular Wordle opener. What is a one-word reason why?",
    a: "It covers many common letters",
    options: [
      "It has no repeated letters",
      "It covers many common letters",
      "It always shares a letter with the answer",
      "It is the most common English word",
    ],
  },
  {
    q: "What does 'etymology' study?",
    a: "The origin and history of words",
    options: [
      "The sounds of language",
      "The grammar of sentences",
      "The origin and history of words",
      "The meaning of symbols",
    ],
  },
  {
    q: "Which five-letter combo appears most often at the start of English words?",
    a: "ST",
    options: ["QU", "ST", "PH", "CH"],
  },
  {
    q: "What is a homophone?",
    a: "A word that sounds like another but has a different meaning",
    options: [
      "A word spelled the same as another",
      "A word that sounds like another but has a different meaning",
      "A word that means the opposite of another",
      "A word borrowed from Greek",
    ],
  },
  {
    q: "How many five-letter words are in the English language (approximately)?",
    a: "~8,000–9,000",
    options: ["~1,000–2,000", "~4,000–5,000", "~8,000–9,000", "~20,000+"],
  },
];

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function WakeUpScreen({ onReady }) {
  const [questions] = useState(() => shuffle(TRIVIA));
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [isReady, setIsReady] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [dots, setDots] = useState(".");

  const q = questions[current % questions.length];

  // Shuffle options whenever the question changes
  useEffect(() => {
    setShuffledOptions(shuffle(q.options));
  }, [current, q.options]);

  // Animate the loading dots
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((d) => (d.length >= 3 ? "." : d + "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Trigger fade-out once backend signals ready
  useEffect(() => {
    if (!isReady) return;
    const show = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onReady, 600);
    }, 1200);
    return () => clearTimeout(show);
  }, [isReady, onReady]);

  // Bridge for parent App to call when backend is awake
  useEffect(() => {
    window.__wakeUpReady = () => setIsReady(true);
    return () => {
      delete window.__wakeUpReady;
    };
  }, []);

  function handleAnswer(option) {
    if (selected !== null) return;
    setSelected(option);
    if (option === q.a) setScore((s) => s + 1);
    setAnswered((a) => a + 1);
    setTimeout(() => {
      setSelected(null);
      setCurrent((c) => c + 1);
    }, 1500);
  }

  return (
    <div className={`wu-overlay${fadeOut ? " wu-fade-out" : ""}`}>
      <div className="wu-container">

        {/* Brand */}
        <div className="wu-brand">
          <div className="wu-logo">
            <span className="wu-tile wu-tile-correct">J</span>
            <span className="wu-tile wu-tile-present">O</span>
            <span className="wu-tile wu-tile-absent">R</span>
            <span className="wu-tile wu-tile-correct">D</span>
            <span className="wu-tile wu-tile-present">L</span>
            <span className="wu-tile wu-tile-absent">E</span>
          </div>
          <p className="wu-subtitle">Guess the word. Beat the clock.</p>
        </div>

        {/* Status */}
        <div className="wu-status">
          {isReady ? (
            <div className="wu-ready">
              <span className="wu-ready-icon">✓</span> Server is awake — loading your game…
            </div>
          ) : (
            <div className="wu-waking">
              <span className="wu-spinner" />
              <span>Waking up the server{dots}</span>
            </div>
          )}
        </div>

        {/* Trivia card */}
        <div className="wu-card">
          <div className="wu-card-header">
            <span className="wu-label">WORD TRIVIA WHILE YOU WAIT</span>
            <span className="wu-score">
              {score}/{answered}
              <span className="wu-score-label"> correct</span>
            </span>
          </div>

          <p className="wu-question">{q.q}</p>

          <div className="wu-options">
            {shuffledOptions.map((option) => {
              let cls = "wu-option";
              if (selected !== null) {
                if (option === q.a) cls += " wu-option-correct";
                else if (option === selected) cls += " wu-option-wrong";
                else cls += " wu-option-dimmed";
              }
              return (
                <button
                  key={option}
                  className={cls}
                  onClick={() => handleAnswer(option)}
                  disabled={selected !== null}
                >
                  {option}
                  {selected !== null && option === q.a && (
                    <span className="wu-badge wu-badge-correct">✓</span>
                  )}
                  {selected !== null && option === selected && option !== q.a && (
                    <span className="wu-badge wu-badge-wrong">✗</span>
                  )}
                </button>
              );
            })}
          </div>

          {selected !== null && (
            <p
              className={`wu-feedback ${
                selected === q.a ? "wu-feedback-correct" : "wu-feedback-wrong"
              }`}
            >
              {selected === q.a
                ? "Correct! 🎉"
                : `Not quite — the answer is "${q.a}".`}
            </p>
          )}
        </div>

        <p className="wu-footer">
          Free tier server spins down after inactivity — thanks for your patience!
        </p>
      </div>
    </div>
  );
}