import React from "react";

function EndGameOverlay({ status, tidBit, onRestart }) {
    return (
      <div className="overlay">
        <div className="message">
          {status === 'won' ? (
            <>
              <h2>Congrats, here's something new to learn today:</h2>
              <p>{tidBit}</p>
            </>
          ) : (
            <h2>Interesting Tidbits are only for winners. Please give it another shot!</h2>
          )}
          <button onClick={onRestart}>Restart</button>
        </div>
      </div>
    );
  }

  export default EndGameOverlay