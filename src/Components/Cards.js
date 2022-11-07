import React, { useState, useEffect } from "react";
import Score from "./Score";

function Cards() {
  const [cards, setCards] = useState([
    { name: "The Grapes of Wrath", selected: false },
    { name: "The Sound and the Fury ", selected: false },
    { name: "The Great Gatsby", selected: false },
    { name: "To Kill a Mockingbird", selected: false },
    { name: "Uncle Tom's Cabin", selected: false },
    { name: "Their Eyes Were Watching God", selected: false },
  ]);

  useEffect(() => {
    console.log("component did mount");
  }, [cards]);

  const randomizeCards = () => {
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
    setCards(cardsCopy);
  };
  //onClick changes false selected to true, indicating whether a player has clicked the pic yet
  const onClick = (i) => {
    let cardsCopy = [...cards];
    cardsCopy[i].selected = true;
    setCards(cardsCopy);
    randomizeCards();
  };

  const consoleLogg = () => {
    console.log("consoleLogg");
    console.log(cards);
  };
  consoleLogg();
  return (
    <>
      <Score cards={cards} />

      {cards.map((card, i) => {
        return (
          <>
            <button onClick={onClick.bind(this, i)}>{card.name}</button>
            <br></br>
          </>
        );
      })}
    </>
  );
}

export default Cards;
