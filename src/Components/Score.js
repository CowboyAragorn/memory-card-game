import React, { useEffect, useState } from "react";

function Score(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    countScore();
  });
  const countScore = () => {
    console.log("count me");
    console.log(props.cards);
    let selectedCards = props.cards.filter((card) => card.selected === true);
    let selectedLength = selectedCards.length;
    console.log(selectedCards);
    console.log(selectedLength);
    setCount(selectedLength);
  };

  console.log("I changed!");
  return <div>Score {count}</div>;
}

export default Score;
