

function AlphabetDisplay({ remainingLetters }) {
    return (
      <div className="alphabet-display">
        {remainingLetters.map((letter, index) => (
          <span key={index} className="alphabet-letter">{letter}</span>
        ))}
      </div>
    );
  }
  export default AlphabetDisplay