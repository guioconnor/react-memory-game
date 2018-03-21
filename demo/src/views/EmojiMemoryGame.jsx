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

const EmojiMemoryGame = () => (
  <MemoryGame
    glimpse={2000}
    cards={[
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
export default EmojiMemoryGame;
