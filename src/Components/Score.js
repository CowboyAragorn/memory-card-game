import React, { useEffect, useState } from "react";

function Score(props) {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    countScore();
    recordBestScore();
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

  return (
    <>
      <div>Score: {currentScore}</div>
      <div>Best Score: {bestScore}</div>
    </>
  );
}

export default Score;
