import React, { useState, useEffect } from "react";

function Cards() {
  const [cards, setCards] = useState([
    { name: 0, selected: false },
    { name: 1, selected: false },
    { name: 2, selected: false },
    { name: 3, selected: false },
    { name: 4, selected: false },
  ]);

  useEffect(() => {
    console.log("component did mount");
    let currentIndex = cards.length;
    let cardsCopy = [...cards];
    while (currentIndex !== 0) {
      let randNum = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      //swap current position with random position
      [cardsCopy[currentIndex], cardsCopy[randNum]] = [
        cardsCopy[randNum],
        cardsCopy[currentIndex],
      ];
    }
    console.log(cardsCopy);
    setCards(cardsCopy);
    console.log(cards);
  }, []);

  return (
    <>
      {cards.map((card) => {
        return <div>{card.name}</div>;
      })}
    </>
  );
}

export default Cards;
