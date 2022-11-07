import React, { useState, useEffect } from "react";
import Score from "./Score";

function Cards() {
  //creating a set of original cards to quickly reset game if
  //a card is chose twice
  const originalCards = [
    { name: "The Grapes of Wrath", selected: false },
    { name: "The Sound and the Fury ", selected: false },
    { name: "The Great Gatsby", selected: false },
    { name: "To Kill a Mockingbird", selected: false },
    { name: "Uncle Tom's Cabin", selected: false },
    { name: "Their Eyes Were Watching God", selected: false },
  ];

  const [cards, setCards] = useState(originalCards);

  useEffect(() => {
    console.log("component did mount");
  }, [cards]);

  //Randomize order of the cards for game
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
    //if user clicks a card they already have clicked
    if (cardsCopy[i].selected === true) {
      setCards(originalCards);
      return;
    } else {
      cardsCopy[i].selected = true;
      setCards(cardsCopy);
      randomizeCards();
    }
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
          <div key={i}>
            <button onClick={onClick.bind(this, i)}>{card.name}</button>
            <br></br>
          </div>
        );
      })}
    </>
  );
}

export default Cards;
