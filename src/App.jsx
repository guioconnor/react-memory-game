import React from 'react';
import MemoryGame from './module';

const App = () => (
  <div>
    <MemoryGame cards={['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']}>
      <MemoryGame.Board />
      <MemoryGame.Reset />
      <MemoryGame.MovesCounter />
      <MemoryGame.PairsFoundCounter />
    </MemoryGame>
  </div>
);

export default App;
