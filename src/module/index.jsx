import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { shuffle } from 'lodash';

import MemoryGrid from './MemoryGrid';
import MemoryCard, { CARD_STATE } from './MemoryCard';

export class MemoryGame extends Component {
  static propTypes = {
    cards: PropTypes.arrayOf(PropTypes.any).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      cards: shuffle(props.cards.concat(props.cards)).map(value => ({
        value,
        state: CARD_STATE.CLOSED,
      })),
    };
  }

  turnCard = position => () => {
    debugger;
    const cards = [...this.state.cards];
    cards[position].state = CARD_STATE.OPEN;

    this.setState({ cards });
  };

  render() {
    const cards = this.state.cards.map((card, position) => (
      <MemoryCard
        onClick={this.turnCard(position)}
        key={position}
        state={card.state}
      >
        {card.value}
      </MemoryCard>
    ));

    return (
      <div>
        <MemoryGrid>{cards}</MemoryGrid>
      </div>
    );
  }
}

export default MemoryGame;
