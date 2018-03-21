import React, { Component } from 'react';
import MemoryGame from 'react-memory-game';
import 'react-memory-game/dist/default-theme.css';

import CardsSelector from '../components/CardsSelector';
import birdsCards from '../cardSets/birds';
import arithmeticCards from '../cardSets/arithmetic';
import emojiCards from '../cardSets/emoji';
import lettersCards from '../cardSets/letters';
import tilesCards from '../cardSets/tiles';

const cardSets = {
  BIRDS_CARDS: {
    label: 'Birds cards',
    component: birdsCards,
  },
  ARITHMETIC_CARDS: {
    label: 'Arithmetic cards',
    component: arithmeticCards,
  },
  EMOJI_CARDS: {
    label: 'Emoji cards',
    component: emojiCards,
  },
  LETTERS_CARDS: {
    label: 'Letters cards',
    component: lettersCards,
  },
  TILES_CARDS: {
    label: 'Tiles cards',
    component: tilesCards,
  },
};

const getOptions = collection =>
  Object.keys(collection).map(value => ({
    value,
    label: collection[value].label,
  }));

class Dashboard extends Component {
  state = {
    selectedCardSet: getOptions(cardSets)[1],
  };

  handleSelectCardset = selectedCardSet => {
    this.setState({ selectedCardSet });
    console.log(`Selected: ${selectedCardSet.label}`);
  };

  render() {
    const { selectedCardSet } = this.state;
    const cardSet = cardSets[selectedCardSet.value].component;
    return (
      <div>
        <CardsSelector
          options={getOptions(cardSets)}
          onChange={this.handleSelectCardset}
          value={selectedCardSet}
        />
        <MemoryGame cards={cardSet} glimpse={2500}>
          <MemoryGame.Reset />
          <MemoryGame.MovesCounter />
          <MemoryGame.PairsFoundCounter />
          <MemoryGame.Board />
        </MemoryGame>
      </div>
    );
  }
}
export default Dashboard;
