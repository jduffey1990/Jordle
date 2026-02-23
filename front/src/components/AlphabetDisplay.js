function AlphabetDisplay({ remainingLetters }) {
  return (
    <div className="alphabet-bar">
      <div className="alphabet-display">
        {remainingLetters.map((letter, index) => (
          <span key={index} className="alphabet-letter">
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
}

export default AlphabetDisplay;