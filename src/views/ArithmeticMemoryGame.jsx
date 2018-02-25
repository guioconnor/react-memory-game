import React from 'react';
import styled from 'styled-components';
import MemoryGame from '../module';
import '../module/default-theme.css';

const Wrap = styled.div`
  font-size: 60px;
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
    glimpse={5000}
    cards={[
      [<Wrap>1+1</Wrap>, <Wrap>2</Wrap>],
      [<Wrap>2+2</Wrap>, <Wrap>4</Wrap>],
      [<Wrap>3+3</Wrap>, <Wrap>6</Wrap>],
      [<Wrap>4+4</Wrap>, <Wrap>8</Wrap>],
      [<Wrap>5+5</Wrap>, <Wrap>10</Wrap>],
      [<Wrap>6+6</Wrap>, <Wrap>12</Wrap>],
      [<Wrap>7+7</Wrap>, <Wrap>14</Wrap>],
      [<Wrap>8+8</Wrap>, <Wrap>16</Wrap>],
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
