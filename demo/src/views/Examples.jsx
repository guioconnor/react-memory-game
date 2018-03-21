import React from 'react';
import styled from 'styled-components';
import MemoryGame from 'react-memory-game';
import cards from '../cardSets/birds';
import './styles.css';
import './demo-theme.css';
import './examples.css';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px 0;
  grid-auto-rows: minmax(100px, auto);
  overflow: hidden;
`;

const Options = styled.div`
  padding: 20px;
  font-size: 1.5rem;
  border-radius: 10px 0 0 10px;
  display: flex;
  flex-direction: column;
`;

const Example = styled.div`
  background: #eee;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
`;

const Header = styled.h2`
  font-size: 1.5rem;
`;

const Code = styled.code`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Pre = styled.pre`
  font-family: 'Fira Code', monospace;
  background: #333;
  color: #00ff00;
  padding: 1em;
  border-radius: 10px;
  flex: 1;
`;

const Examples = () => (
  <Wrapper>
    <Options>
      <Header>Basic game</Header>
      <Code>
        <Pre>{`<MemoryGame cards={cards}>
  <MemoryGame.Board />
</MemoryGame>
`}</Pre>
      </Code>
    </Options>
    <Example>
      <MemoryGame cards={cards}>
        <MemoryGame.Board />
      </MemoryGame>
    </Example>
    <Options>
      <Header>Reset Button</Header>
      <Code>
        <Pre>{`<MemoryGame cards={cards}>
  <MemoryGame.Reset />
  <MemoryGame.Board />
</MemoryGame>
`}</Pre>
      </Code>
    </Options>
    <Example>
      <MemoryGame cards={cards}>
        <MemoryGame.Reset />
        <MemoryGame.Board />
      </MemoryGame>
    </Example>
    <Options>
      <Header>Glimpse</Header>
      <Code>
        <Pre>{`<MemoryGame cards={cards} glimpse={2500}>
  <MemoryGame.Reset />
  <MemoryGame.Board />
</MemoryGame>
`}</Pre>
      </Code>
    </Options>
    <Example>
      <MemoryGame cards={cards} glimpse={2500}>
        <MemoryGame.Reset />
        <MemoryGame.Board />
      </MemoryGame>
    </Example>
    <Options>
      <Header>Counters</Header>
      <Code>
        <Pre>{`<MemoryGame cards={cards} glimpse={2500}>
  <MemoryGame.Reset />
  <MemoryGame.Board />
  <MemoryGame.MovesCounter />
  <MemoryGame.PairsFoundCounter />
</MemoryGame>
`}</Pre>
      </Code>
    </Options>
    <Example>
      <MemoryGame cards={cards} glimpse={2500}>
        <MemoryGame.MovesCounter />
        <MemoryGame.PairsFoundCounter />
        <MemoryGame.Board />
        <MemoryGame.Reset />
      </MemoryGame>
    </Example>
    <Options>
      <Header>Glimpse on mount</Header>
      <p>
        This example will show an initial glimpse for 10h. You probably want to
        make it way shorter in your game
      </p>
      <Code>
        <Pre>{`<MemoryGame cards={cards} glimpse={36000000} glimpseOnMount>
  <MemoryGame.Reset />
  <MemoryGame.Board />
  <MemoryGame.MovesCounter />
  <MemoryGame.PairsFoundCounter />
</MemoryGame>
`}</Pre>
      </Code>
    </Options>
    <Example>
      <MemoryGame cards={cards} glimpse={36000000} glimpseOnMount>
        <MemoryGame.MovesCounter />
        <MemoryGame.PairsFoundCounter />
        <MemoryGame.Board />
        <MemoryGame.Reset />
      </MemoryGame>
    </Example>
  </Wrapper>
);
export default Examples;
