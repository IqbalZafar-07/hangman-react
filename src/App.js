import { useEffect, useState } from "react";
import "./App.css";
import Figure from "./Figure";
import Header from "./Header";
import Word from "./Word";
import WrongLetters from "./WrongLetters";
import { showNotification as show } from "./Message/Message";
import Popup from "./Popup";
import Notification from "./Notification";

const words = ["application", "programming", "interface", "wizard", "frizar"];

let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const [playble, setPlayble] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  function playAgain() {
    setPlayble(true);
    setCorrectLetters([]);
    setWrongLetters([]);
    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }
  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      if (playble) {
        if (keyCode >= 65 && keyCode <= 90) {
          const letter = key.toLowerCase();

          if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
              setCorrectLetters((currentLetters) => [
                ...currentLetters,
                letter,
              ]);
            } else {
              show(setShowNotification);
            }
          } else {
            if (!wrongLetters.includes(letter)) {
              setWrongLetters((wrongLetters) => [...wrongLetters, letter]);
            } else {
              show(setShowNotification);
            }
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctLetters, wrongLetters, playble]);
  return (
    <div className="App">
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayble={setPlayble}
        playAgain={playAgain}
      />
      <Notification showNotification={showNotification} />
    </div>
  );
}

export default App;
