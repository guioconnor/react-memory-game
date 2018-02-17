import React from 'react';
import styled from 'styled-components';
import MemoryGame from './module';
import './module/default-theme.css';

const Wrap = styled.div`
  font-size: 120px;
`;

const App = () => (
  <div>
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
      <MemoryGame.Board />
      <MemoryGame.Reset />
      <MemoryGame.MovesCounter />
      <MemoryGame.PairsFoundCounter />
    </MemoryGame>
  </div>
);
export default App;
