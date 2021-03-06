import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import database from './firebase';

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: 'steve jobs',
      url:
        'https://img.macg.co/2017/11/macgpic-1509609791-1081180604761-sc-jpt.jpg',
    },
    {
      name: 'mark zukerberg',
      url:
        'data:image/jpeg;base64,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',
    },
  ]);
  useEffect(() => {
    const unsubscribe = database
      .collection('people')
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="tinderCards_cardContainer">
      {people.map((person) => (
        <TinderCard
          className="swipe"
          key={person.name}
          preventSwipe={['up', 'down']}
        >
          <div
            style={{ backgroundImage: `url(${person.url})` }}
            className="card"
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
}

export default TinderCards;
