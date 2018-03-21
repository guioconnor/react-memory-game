import React from 'react';
import styled from 'styled-components';
import MemoryGame from 'react-memory-game';
import 'react-memory-game/dist/default-theme.css';

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

const LettersMemoryGame = () => (
  <MemoryGame
    glimpse={2000}
    cards={[
      [<Wrap>A</Wrap>, <Wrap>a</Wrap>],
      [<Wrap>B</Wrap>, <Wrap>b</Wrap>],
      [<Wrap>C</Wrap>, <Wrap>c</Wrap>],
      [<Wrap>D</Wrap>, <Wrap>d</Wrap>],
      [<Wrap>E</Wrap>, <Wrap>e</Wrap>],
      [<Wrap>F</Wrap>, <Wrap>f</Wrap>],
      [<Wrap>G</Wrap>, <Wrap>g</Wrap>],
      [<Wrap>H</Wrap>, <Wrap>h</Wrap>],
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
export default LettersMemoryGame;
