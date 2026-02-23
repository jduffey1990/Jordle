import React from "react";

const WIN_MESSAGES = [
  "Nailed it!",
  "Word wizard!",
  "Too easy for you.",
  "Genius.",
  "Outstanding!",
];

function EndGameOverlay({ status, tidBit, onRestart, word }) {
  const won = status === 'won';
  const headline = won
    ? WIN_MESSAGES[Math.floor(Math.random() * WIN_MESSAGES.length)]
    : "So close!";

  return (
    <div className="overlay">
      <div className="message">
        <span className="message-icon">{won ? "🎉" : "💡"}</span>

        <h2>{headline}</h2>

        {won ? (
          <>
            <p>Here's something to take with you today:</p>
            <div className="tidbit-box">
              <p>{tidBit}</p>
            </div>
          </>
        ) : (
          <>
            <p>
              The word was{" "}
              <strong style={{ color: "var(--correct)", fontFamily: "var(--font-tile)", letterSpacing: "0.1em" }}>
                {word?.toUpperCase()}
              </strong>
              . Fun facts are reserved for winners — but you'll get it next time!
            </p>
          </>
        )}

        <button className={`restart-btn ${status}`} onClick={onRestart}>
          {won ? "Play Again" : "Try Again"}
        </button>
      </div>
    </div>
  );
}

export default EndGameOverlay;