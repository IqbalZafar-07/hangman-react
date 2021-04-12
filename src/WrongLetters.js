import React from "react";

function WrongLetters({ wrongLetters }) {
  // const renderWords = ()=> {
  //     wrongLetters.map((letter, i) => (
  //         <span key={i}>{letter}</span>
  //       ))
  // }
  return (
    <div className="wrong-letters-container">
      <div>
        {wrongLetters.length > 0 && <p>Wrong letters</p>}
        {wrongLetters.length > 0 &&
          wrongLetters
            .map((letter, i) => <span key={i}>{letter}</span>)
            .reduce((prev, curr) =>
              prev === null ? [curr] : [prev, ", ", curr]
            )}
      </div>
    </div>
  );
}

export default WrongLetters;
