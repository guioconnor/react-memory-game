import React from 'react';
import styled from 'styled-components';
import MemoryGame from '../module';
import '../module/default-theme.css';

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
      <Wrap>A</Wrap>,
      <Wrap>B</Wrap>,
      <Wrap>C</Wrap>,
      <Wrap>D</Wrap>,
      <Wrap>E</Wrap>,
      <Wrap>F</Wrap>,
      <Wrap>G</Wrap>,
      <Wrap>H</Wrap>,
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
