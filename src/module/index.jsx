import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { shuffle } from 'lodash';

import MemoryGrid from './MemoryGrid';
import MemoryCard, { CARD_STATE } from './MemoryCard';
import Counter from './Counter';

const MEMORY_GAME_CONTEXT = '__memory_game_context__';

const ResetButton = ({ children = 'Reset Game' }, context) => {
  const { resetGame } = context[MEMORY_GAME_CONTEXT];
  return (
    <button className="memory-game--reset" onClick={resetGame}>
      {children}
    </button>
  );
};
ResetButton.contextTypes = {
  [MEMORY_GAME_CONTEXT]: PropTypes.object.isRequired,
};

const Board = (props, context) => {
  const { cards } = context[MEMORY_GAME_CONTEXT];
  return <MemoryGrid>{cards}</MemoryGrid>;
};
Board.contextTypes = {
  [MEMORY_GAME_CONTEXT]: PropTypes.object.isRequired,
};

const MovesCounter = (props, context) => {
  const { movesCounter } = context[MEMORY_GAME_CONTEXT];
  return <Counter counter={movesCounter} />;
};
MovesCounter.contextTypes = {
  [MEMORY_GAME_CONTEXT]: PropTypes.object.isRequired,
};

const PairsFoundCounter = (props, context) => {
  const { pairsFoundCounter } = context[MEMORY_GAME_CONTEXT];
  return <Counter counter={pairsFoundCounter} />;
};
PairsFoundCounter.contextTypes = {
  [MEMORY_GAME_CONTEXT]: PropTypes.object.isRequired,
};
export class MemoryGame extends Component {
  static propTypes = { cards: PropTypes.arrayOf(PropTypes.any).isRequired };
  static Reset = ResetButton;
  static Board = Board;
  static MovesCounter = MovesCounter;
  static PairsFoundCounter = PairsFoundCounter;
  static childContextTypes = {
    [MEMORY_GAME_CONTEXT]: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = this.getInitialState(props.cards);
  }

  getChildContext() {
    return {
      [MEMORY_GAME_CONTEXT]: {
        cards: this.getMemoryCards(),
        resetGame: this.resetGame,
        movesCounter: this.state.moves,
        pairsFoundCounter: this.state.pairsFound,
      },
    };
  }

  getInitialState = cards => ({
    moves: 0,
    pairsFound: 0,
    cards: shuffle(cards.concat(cards)).map(value => ({
      value,
      state: CARD_STATE.CLOSED,
    })),
  });

  resetGame = () => {
    clearTimeout(this.timeout);
    this.setState(this.getInitialState(this.props.cards));
  };

  getOpenCards = () =>
    this.state.cards.filter(card => card.state === CARD_STATE.OPEN);

  openCard = position => {
    const cards = [...this.state.cards];
    cards[position].state =
      cards[position].state === CARD_STATE.CLOSED
        ? CARD_STATE.OPEN
        : cards[position].state;

    this.setState({ cards });
  };

  closeOpenCards = () => {
    clearTimeout(this.timeout);
    const cards = this.state.cards.map(card => ({
      ...card,
      state: card.state === CARD_STATE.OPEN ? CARD_STATE.CLOSED : card.state,
    }));

    this.setState({ cards });
  };

  findCardPair = () => {
    const cards = this.state.cards.map(card => ({
      ...card,
      state: card.state === CARD_STATE.OPEN ? CARD_STATE.FOUND : card.state,
    }));

    this.setState({ cards });
  };

  hasGameEnded = () => {
    this.state.cards.some(card => card.state !== CARD_STATE.FOUND);
  };

  scheduleCloseCards = (delay = 700) => {
    this.timeout = setTimeout(this.closeOpenCards, delay);
  };

  incrementCounter = () => {
    this.setState({
      moves: this.state.moves + 1,
    });
  };

  incrementFoundPairsCounter = () => {
    this.setState({
      pairsFound: this.state.pairsFound + 1,
    });
  };

  checkForPair = () => {
    const openCards = this.getOpenCards();
    if (openCards.length !== 2) {
      return;
    }

    this.incrementCounter();

    if (openCards[0].value === openCards[1].value) {
      this.findCardPair();
      this.incrementFoundPairsCounter();
    } else {
      this.scheduleCloseCards();
    }
  };

  handleCardClick = position => () => {
    const openCards = this.getOpenCards(this.state);

    switch (openCards.length) {
      case 0: {
        this.openCard(position);
        break;
      }
      case 1: {
        this.openCard(position);
        this.checkForPair();
        break;
      }
      default: {
        break;
      }
    }
  };

  getMemoryCards() {
    return this.state.cards.map((card, position) => (
      <MemoryCard
        onClick={this.handleCardClick(position)}
        key={position}
        state={card.state}
      >
        {card.value}
      </MemoryCard>
    ));
  }

  render() {
    return <div className="memory-game">{this.props.children}</div>;
  }
}

export default MemoryGame;

/* State Machine

switch(state) {
  all_closed:
    click_card();
  one_open:
    click_card();
  card_clicked:
    if(card.notFound && cards.open < 2) open_card()
  two_open:
    if(card[1].value === card[2].value) find_cards();
    else close_open_cards
  all_found:
    congratulate();
    close_all_cards();
}

*/
