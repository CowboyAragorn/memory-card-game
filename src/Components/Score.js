import React, { useEffect, useState } from "react";

function Score(props) {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [togglePopup, setTogglePopup] = useState("hide");

  useEffect(() => {
    countScore();
    recordBestScore();
    winCondition();
  });
  const countScore = () => {
    let selectedCards = props.cards.filter((card) => card.selected === true);
    let selectedLength = selectedCards.length;

    setCurrentScore(selectedLength);
  };

  const recordBestScore = () => {
    if (bestScore < currentScore) {
      setBestScore(currentScore);
    }
  };
  const winCondition = () => {
    const winScore = props.cards.length;
    if (currentScore === winScore) {
      console.log("you won!");
      setTogglePopup("show");
    }
  };

  //just reload whole page, don't have to mess around with resetting state
  //If I wanted to reset the game without reloading the page, would have to
  //lift count and best state up to cards component and so that I could reset state
  //of cards component
  const hidePopup = () => {
    window.location.reload();
  };

  return (
    <>
      <div>Score: {currentScore}</div>
      <div>Best Score: {bestScore}</div>
      <div id="popupScreen" className={togglePopup}>
        <div id="winPopup" className={togglePopup}>
          <p>You Won!</p>
          <button id="popupBtn" onClick={hidePopup}>
            Play Again
          </button>
        </div>
      </div>
    </>
  );
}

export default Score;
