import React, { useState, useEffect } from "react";
import Score from "./Score";
import originalCards from "./originalCards";

function Cards() {
  //set cards state equal to imported original cards
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

  const consoleLogger = () => {
    console.log("consoleLogger");
    console.log(cards);
  };
  consoleLogger();
  return (
    <>
      <Score cards={cards} />
      <br></br>
      <div id="cardsContainer">
        {cards.map((card, i) => {
          return (
            <div key={i}>
              <button className="cardBtn" onClick={onClick.bind(this, i)}>
                <img src={card.url} alt="pic" className="img"></img>
                <div>{card.name}</div>
              </button>
              <br></br>
              <br></br>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Cards;
