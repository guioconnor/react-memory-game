import React from 'react';
import styled from 'styled-components';
import MemoryGame from './module';
import './module/default-theme.css';

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
      <Wrap>🔥</Wrap>,
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
