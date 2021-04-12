import React, { useEffect } from "react";
import checkWin from "./Message/Message1";

function Popup({
  correctLetters,
  wrongLetters,
  selectedWord,
  setPlayble,
  playAgain,
}) {
  let finalMessage = "";
  let finalMessageRevealWord = "";
  let playble = true;

  if (checkWin(correctLetters, wrongLetters, selectedWord) == "win") {
    finalMessage = "Congratulations You won !✌️";
    playble = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) == "lose") {
    console.log("popup");
    finalMessage = "Unfortunately you lost 😕";
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
    playble = false;
  }
  useEffect(() => {
    setPlayble(playble);
  });
  return (
    <div
      className="popup-container"
      style={finalMessage !== "" ? { display: "flex" } : {}}
    >
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
}

export default Popup;
