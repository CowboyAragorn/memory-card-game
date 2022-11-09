import React, { useState } from "react";
import Score from "./Score";

function Cards() {
  //kept these in the same file so I don't have to worry about object cloning, would probably be nicer to break them out
  const originalCards = [
    {
      name: "The Grapes of Wrath",
      selected: false,
      url: require("./../images/The_Grapes_of_Wrath_(1939_1st_ed_cover).jpg"),
    },
    {
      name: "The Sound and the Fury ",
      selected: false,
      url: require("/home/jacob/theOdinProject/memory-card-game/src/images/The_Sound_and_the_Fury_(1929_1st_ed_dust_jacket).jpg"),
    },

    {
      name: "The Great Gatsby",
      selected: false,
      url: require("/home/jacob/theOdinProject/memory-card-game/src/images/The_Great_Gatsby.jpg"),
    },
    {
      name: "To Kill a Mockingbird",
      selected: false,
      url: require("/home/jacob/theOdinProject/memory-card-game/src/images/To_Kill_a_Mockingbird_(first_edition_cover).jpg"),
    },
    {
      name: "Uncle Tom's Cabin",
      selected: false,
      url: require("/home/jacob/theOdinProject/memory-card-game/src/images/uncle_toms_cabin.jpg"),
    },
    {
      name: "Their Eyes Were Watching God",
      selected: false,
      url: require("/home/jacob/theOdinProject/memory-card-game/src/images/TheirEyesWereWatchingGod.jpeg"),
    },
  ];

  //set cards state equal to imported original cards
  const [cards, setCards] = useState(originalCards);

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
      console.log("originalCards");
      console.log(originalCards);
      setCards(originalCards);
      return;
    } else {
      cardsCopy[i].selected = true;
      setCards(cardsCopy);
      randomizeCards();
    }
  };

  //logs after the async updates to cards
  const consoleLogger = () => {
    console.log("consoleLogger");
    console.log(cards);
  };
  //consoleLogger();
  return (
    <>
      <div id="scoreHeader">
        <h1 id="siteTitle">Great American Memory Game</h1>
        <div id="score">
          <Score cards={cards} />
        </div>
      </div>
      <br></br>
      <div id="instructions">
        TO WIN: Click every book once without clicking the same book twice
      </div>
      <div id="cardsContainer">
        {cards.map((card, i) => {
          return (
            <div key={i}>
              <button className="cardBtn" onClick={onClick.bind(this, i)}>
                <img src={card.url} alt={card.name} className="img"></img>
                <p className="cardTitle">{card.name}</p>
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
