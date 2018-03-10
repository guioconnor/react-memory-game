import React from 'react';
import MemoryGame from '../module';
import './styles.css';
import './demo-theme.css';

import animalsCards from '../cardSets/animals';
import birdsCards from '../cardSets/birds';
import arithmeticCards from '../cardSets/arithmetic';
import emojiCards from '../cardSets/emoji';
import lettersCards from '../cardSets/letters';
// import tilesCards from '../cardSets/tiles';

const About = () => (
  <div className="about">
    <h1>React Memory Game</h1>
    <p>
      This is a library to help you build memory games. This is not a ready made
      memory game. It's a toolkit that implements the logic engine behind a
      memory game so you can focus on the game itself.
    </p>
    <p>
      For instance, let's say you like birds, you could have gone find{' '}
      <a
        href="https://www.freepik.com/free-vector/birds-set_719889.htm"
        target="_blank"
        rel="noopener noreferrer"
      >
        some nice images
      </a>{' '}
      have made this.
    </p>
    <div className="demo">
      <MemoryGame cards={birdsCards}>
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
      Most of the work you have to do is to make the cards. You have to create
      an array with 8 React components.
    </p>
    <code className="block">
      <pre>{`
      cards = [
        <mg src="bird1.svg" alt="" />,
        <mg src="bird2.svg" alt="" />,
        <mg src="bird3.svg" alt="" />,
        <mg src="bird4.svg" alt="" />,
        <mg src="bird5.svg" alt="" />,
        <mg src="bird6.svg" alt="" />,
        <mg src="bird7.svg" alt="" />,
        <mg src="bird8.svg" alt="" />
      ];      
    `}</pre>
    </code>
    <p>
      The engine will task itself with duplicating the cards randomising their
      positions, responding to clicks, mathching the cards, all that.
    </p>

    <p>
      The <code>MemoryGame</code> main component is the state owner. It is the
      game logic itself, so to speak. But it doesn't render anything by default,
      you need to use the static components it exports to build your board. At
      its simplest you need to add <code>{`<MemoryGame.Board />`}</code> as a
      child of <code>{`<MemoryGame />`}</code>.
    </p>
    <code className="block">
      <pre>{`import MemoryGame from 'react-memory-game';

const BirdsMemoryGame = () => {
  return (
    <MemoryGame cards={birdsCards} glimpse={2500}>
      <MemoryGame.Board />
    </MemoryGame>
  )
}

export default BirdsMemoryGame;
`}</pre>
    </code>

    <p>This is all is needed to build the Birds Memory Game. Cool huh?</p>

    <h2>Reset</h2>

    <p>
      There is one little problem with our previous example, though. You can't
      reset it. Once you finish, you can't play again. Let's create a game with
      a reset button. And while we are at it, let's make simpler cards,
      something you can copy and paste without having to find, edit, save and
      host images. Let's use emoji instead.
    </p>

    <p>These are your cards. Simple, huh?</p>

    <code className="block">
      <pre>{`import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div\`
  font-size: 120px;
\`;

const cards = [
  <Wrap>
    <span role="img" aria-label="Poo">
      💩
    </span>
  </Wrap>,
  <Wrap>
    <span role="img" aria-label="Shrug">
      🤷
    </span>
  </Wrap>,
  <Wrap>
    <span role="img" aria-label="Heart">
      ❤️
    </span>
  </Wrap>,
  <Wrap>
    <span role="img" aria-label="Joy">
      😂
    </span>
  </Wrap>,
  <Wrap>
    <span role="img" aria-label="Heart Eyes">
      😍
    </span>
  </Wrap>,
  <Wrap>
    <span role="img" aria-label="Smile">
      😊
    </span>
  </Wrap>,
  <Wrap>
    <span role="img" aria-label="Thinking">
      🤔
    </span>
  </Wrap>,
  <Wrap>
    <span role="img" aria-label="Fire">
      🔥
    </span>
  </Wrap>,
];

`}</pre>
    </code>

    <p>
      And as you know, that was the hard part. Now create your board. Alongside
      your <code>{`<MemoryGame.Board />`}</code>, you can use a{' '}
      <code>{`<MemoryGame.Reset>`}</code>. If you don't pass it any text, it
      will print a default label.
    </p>

    <p>
      While we are at it we're going to add a <code>glimpse</code> prop to it.
      You tell it how many milliseconds you want it to be and the cards will be
      shown for that long before the game starts.
    </p>

    <code className="block">
      <pre>{`<MemoryGame cards={emojiCards} glimpse={2500}>
  <MemoryGame.Reset>Start game</MemoryGame.Reset>
  <MemoryGame.Board />
</MemoryGame>
`}</pre>
    </code>

    <div className="demo">
      <MemoryGame cards={emojiCards} glimpse={2500}>
        <MemoryGame.Reset>Start game</MemoryGame.Reset>
        <MemoryGame.Board />
      </MemoryGame>
    </div>

    <p>
      Ah, before we move on. You can put the static components (the Reset, the
      Board and some others we haven't seen yet) in any position you want. You
      can put the reset button before or after the board, you can put more than
      one button if you want.
    </p>

    <p>
      Heh, you can put more than one board if that floats your boat but that
      would be crazy, why would anyone do that?{' '}
      <span role="img" aria-label="Smile">
        😉
      </span>
    </p>

    <div className="demo">
      <MemoryGame cards={emojiCards} glimpse={2500}>
        <MemoryGame.Board />
        <MemoryGame.Reset>Start game</MemoryGame.Reset>
        <MemoryGame.Board />
      </MemoryGame>
    </div>

    <h2>Variations</h2>
    <p>
      You see, memory games are mostly about memory, but they are also about
      pattern recognition. In the birds and emoji games the pattern is trivial,
      you have to find two identical cards. However, a common technique to help
      children improve their pattern matching skills is to match objects against
      their silhouettes.
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
      To do this is very similar to the what we've done before, except this
      time, you are going to pass an array with 8 pairs of cards. Instead of 8
      simple cards. For simplicity, let's build a game to match uppercase and
      lowercase letters.
    </p>

    <code className="block">
      <pre>{`const Wrap = styled.div\`
  font-size: 120px;
\`;

const letters = shuffle([
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
  'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'x', 'y', 'z',
]).slice(0, 8);

const cards = letters.map((letter, i, arr) => [
  <Wrap>{letter.toUpperCase()}</Wrap>,
  <Wrap>{letter}</Wrap>,
]);`}</pre>
    </code>

    <p>
      What this is doing is randomising 8 lowercase letters and then creating an
      array of 8 pairs. Each pair being also an array with one uppecase and one
      lowercase letter wrapped in a styled div like so
      <code className="block">
        <pre>{`[
  [<Wrap>A</Wrap>,<Wrap>a</Wrap>],
  [<Wrap>B</Wrap>,<Wrap>b</Wrap>],
  [<Wrap>C</Wrap>,<Wrap>c</Wrap>],
  [<Wrap>D</Wrap>,<Wrap>d</Wrap>],
  [<Wrap>E</Wrap>,<Wrap>e</Wrap>],
  [<Wrap>F</Wrap>,<Wrap>f</Wrap>],
  [<Wrap>G</Wrap>,<Wrap>g</Wrap>],
  [<Wrap>H</Wrap>,<Wrap>h</Wrap>],
]`}</pre>
      </code>
    </p>

    <div className="demo">
      <MemoryGame cards={lettersCards} glimpse={2500}>
        <MemoryGame.Reset>Start game</MemoryGame.Reset>
        <MemoryGame.Board />
      </MemoryGame>
    </div>

    <p>
      Cool, huh? How about some arithmetic instead? Let's increase the glimpse
      to 7500ms, to give the mind more time to calculate.
    </p>

    <div className="demo">
      <MemoryGame cards={arithmeticCards} glimpse={7500}>
        <MemoryGame.Reset>Start game</MemoryGame.Reset>
        <MemoryGame.Board />
      </MemoryGame>
    </div>

    <p>
      As the author game, you are free to conceptualise what a matching pair is.
      The sky is the limit... Or the size of thte card whichever comes first.
    </p>
  </div>
);
export default About;
