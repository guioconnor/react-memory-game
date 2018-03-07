import React from 'react';
import MemoryGame from '../module';
import './styles.css';
import './demo-theme.css';

import animalsCards from '../cardSets/animals';
import birdsCards from '../cardSets/birds';
// import arithmeticCards from '../cardSets/arithmetic';
// import emojiCards from '../cardSets/emoji';
import lettersCards from '../cardSets/letters';
// import tilesCards from '../cardSets/tiles';

const About = () => (
  <div className="about">
    <h1>React Memory Game</h1>
    <p>
      This is a library to build memory games. This is not a ready made memory
      game. It's a toolkit that implements the logic engine behind a memory game
      and some handy utiltiies. For instance, if you like birds, you could have
      made this.
    </p>
    <div className="demo">
      <MemoryGame cards={birdsCards} glimpse={2500}>
        <MemoryGame.Reset>Start game</MemoryGame.Reset>
        <MemoryGame.Board />
      </MemoryGame>
      <small>
        Image credits:{' '}
        <a
          href="https://www.freepik.com/free-vector/birds-set_719889.htm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Freepik
        </a>
      </small>
    </div>
    <p>
      To do this is really easy. First you need a React project. If you don't
      have an existing project, you can start one with{' '}
      <a href="https://github.com/facebook/create-react-app">
        Create React App
      </a>{' '}
      or <a href="https://zeit.co/blog/next">Next</a>.
    </p>
    <p>For instance, with Create React App you could do this</p>
    <code className="block">
      <pre>npm install create-react-app -g</pre>
      <pre>create-react-app birds-memory-game</pre>
      <pre>cd birds-memory-game</pre>
      <pre>yarn add react-memory-game</pre>
    </code>
    <p>Then find the file called App.js and add this</p>
    <code className="block">
      <pre>{`
import MemoryGame from 'react-memory-game';

cards = [
  <img src="bird1.svg" alt="" />,
  <img src="bird2.svg" alt="" />,
  <img src="bird3.svg" alt="" />,
  <img src="bird4.svg" alt="" />,
  <img src="bird5.svg" alt="" />,
  <img src="bird6.svg" alt="" />,
  <img src="bird7.svg" alt="" />,
  <img src="bird8.svg" alt="" />
];

const BirdsMemoryGame = () => {
  return (
    <MemoryGame cards={birdsCards} glimpse={2500}>
      <MemoryGame.Reset>Start game</MemoryGame.Reset>
      <MemoryGame.Board />
    </MemoryGame>
  )
}

export default BirdsMemoryGame;
`}</pre>
    </code>
    <p>
      The logic engine is encapuslated in the <code>{`<MemoryGame>`}</code>{' '}
      component. Whereas <code>{`<MemoryGame.Board>`}</code> and{' '}
      <code>{`<MemoryGame.Reset>`}</code> are controls. Feel free to place them
      and style them however you like, as long as they are inside the{' '}
      <code>{`<MemoryGame>`}</code>. You have multiple reset buttons if you
      want. You can even have multiple boards for the same game.
    </p>
    <h2>Variations</h2>
    <p>
      You see, memory games are mostly about memory, but they are also about
      pattern matching. In the birds game the pattern is trivial, you have to
      find two identical cards, however, a common technique to help children
      improve their pattern matching skills is to match objects against their
      silhouettes.
    </p>
    <div className="demo">
      <MemoryGame cards={animalsCards} glimpse={2500}>
        <MemoryGame.Reset>Start game</MemoryGame.Reset>
        <MemoryGame.Board />
      </MemoryGame>
      <small>
        Image credits:{' '}
        <a
          href="https://www.freepik.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Freepik
        </a>
      </small>
    </div>
    <p>
      And you're not just restricted to images, any binary pattern you can fit
      on a pair of cards can make a nice little game. How about Capital and
      lowercase letters?
    </p>
    <div className="demo">
      <MemoryGame cards={lettersCards} glimpse={2500}>
        <MemoryGame.Reset>Start game</MemoryGame.Reset>
        <MemoryGame.Board />
      </MemoryGame>
    </div>
  </div>
);

export default About;
