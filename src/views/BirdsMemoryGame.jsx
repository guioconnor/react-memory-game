import React from 'react';
import styled from 'styled-components';
import MemoryGame from '../module';
import '../module/default-theme.css';

const birdImages = [
  'canary',
  'cardinal',
  'eagle',
  'falcon',
  'toucan',
  'b2',
  'b3',
  'b4',
];

const getImageUrl = fileName =>
  `https://firebasestorage.googleapis.com/v0/b/dinos-ef87d.appspot.com/o/birds%2F${fileName}.svg?alt=media`;

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

const Image = styled.img`
  width: 100%;
  display: block;
`;

const cards = birdImages.map(imageName => (
  <Wrap>
    <Image src={getImageUrl(imageName)} alt={imageName} />
  </Wrap>
));

const LettersMemoryGame = () => (
  <MemoryGame cards={cards} glimpse={2500}>
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
