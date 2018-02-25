import React from 'react';
import styled from 'styled-components';
import MemoryGame from '../module';
import '../module/default-theme.css';

const Wrap = styled.div`
  font-size: 60px;
`;

const LettersMemoryGame = () => (
  <MemoryGame
    cards={[
      <Wrap>1</Wrap>,
      <Wrap>2</Wrap>,
      <Wrap>3</Wrap>,
      <Wrap>4</Wrap>,
      <Wrap>5</Wrap>,
      <Wrap>6</Wrap>,
      <Wrap>7</Wrap>,
      <Wrap>8</Wrap>,
    ]}
  >
    <MemoryGame.Board />
    <MemoryGame.Reset />
  </MemoryGame>
);
export default LettersMemoryGame;
