[![Build Status](https://travis-ci.org/guioconnor/react-memory-game.svg?branch=master)](https://travis-ci.org/guioconnor/react-memory-game)

## What is react-memory-game?

Is a memory game engine built in react to use in react applications. This is not a game per se but
a library to allow you to build your own memory games.

Disclaimer: it is extremely early days and functionality is very limited. It is currently very
experimental, you should not use this for anything that is not throwaway code.

## How do I do it?

Create your react project. For instance, you can do that using `create-react-app`.

```
create-react-app my-awesome-memory-game
cd my-awesome-memory-game
```

Import the library into your Component and make use of 
```
<MemoryGame cards={[ /* cards */]} />
<MemoryGame.Board />
<MemoryGame.Reset />
<MemoryGame.MovesCounter />
<MemoryGame.PairsFoundCounter />
```


```
import React from "react";
import styled from "styled-components";
import MemoryGame from "react-memory-game";
import "react-memory-game/lib/default-theme.css";

const Wrap = styled.div`
  font-size: 120px;
`;

const GameContainer = styled.div`
  display: flex;
`;

const PanelContainer = styled.div`
  width: 200px;
  order: -1;
`;

const BoardContainer = styled.div`
  flex: 1;
`;

const App = () => (
  <MemoryGame
    cards={[
      <Wrap>💩</Wrap>,
      <Wrap>🤷</Wrap>,
      <Wrap>❤️</Wrap>,
      <Wrap>😂</Wrap>,
      <Wrap>😍</Wrap>,
      <Wrap>😊</Wrap>,
      <Wrap>🤔</Wrap>,
      <Wrap>🔥</Wrap>
    ]}
  >
    <GameContainer>
      <BoardContainer>
        <MemoryGame.Board />
      </BoardContainer>
      <PanelContainer>
        <MemoryGame.Reset />
        <MemoryGame.MovesCounter />
        <MemoryGame.PairsFoundCounter />
      </PanelContainer>
    </GameContainer>
  </MemoryGame>
);
export default App;
```