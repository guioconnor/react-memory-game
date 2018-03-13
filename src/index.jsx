import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { shuffle, identity, cloneDeep } from 'lodash';
import "regenerator-runtime/runtime";

import MemoryGrid from './MemoryGrid';
import MemoryCard, { CARD_STATE } from './MemoryCard';
import Counter from './Counter';

const MEMORY_GAME_CONTEXT = '__memory_game_context__';
const BOARD_SIZE = 16;

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
  static propTypes = {
    cards: PropTypes.arrayOf(PropTypes.any).isRequired,
    glimpse: PropTypes.number,
    glimpseOnMount: PropTypes.bool,
  };
  static Reset = ResetButton;
  static Board = Board;
  static MovesCounter = MovesCounter;
  static PairsFoundCounter = PairsFoundCounter;
  static childContextTypes = {
    [MEMORY_GAME_CONTEXT]: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    if (props.cards.length !== BOARD_SIZE / 2) {
      throw new Error(
        `Wrong card set size: <MemoryGame /> expects ${BOARD_SIZE /
          2} cards or pairs`,
      );
    }
    this.state = this.getInitialState(props.cards);
  }

  componentWillMount() {
    const { glimpse, glimpseOnMount } = this.props;
    if (glimpse && glimpseOnMount) {
      this.startGlimpse();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.cards !== this.props.cards) {
      this.resetGame(nextProps.cards);
    }
  }

  getChildContext() {
    return {
      [MEMORY_GAME_CONTEXT]: {
        cards: this.getMemoryCards(),
        resetGame: this.resetGame.bind(this, this.props.cards),
        movesCounter: this.state.moves,
        pairsFoundCounter: this.state.pairsFound,
      },
    };
  }

  getPreparedCard = (display, value) => ({
    value,
    display,
    state: CARD_STATE.CLOSED,
  });

  prepareCardPairs = pairs =>
    pairs
      .map((pair, index) => pair.map(card => this.getPreparedCard(card, index)))
      .reduce((prev, curr) => prev.concat(curr));

  prepareSingleCards = cards => {
    const preparedCards = cards.map(this.getPreparedCard);
    return preparedCards.concat(cloneDeep(preparedCards));
  };

  getInitialState = cards => {
    const randomise = this.props.dryRun ? identity : shuffle;
    let prepareCards = Array.isArray(cards[0])
      ? this.prepareCardPairs
      : this.prepareSingleCards;

    return {
      moves: 0,
      pairsFound: 0,
      glimpse: false,
      cards: randomise(prepareCards(cards)),
    };
  };

  resetGame = cards => {
    clearTimeout(this.timeout);
    this.setState(this.getInitialState(cards), () => {
      if (this.props.glimpse) {
        this.startGlimpse();
      }
    });
  };

  startGlimpse = async () => {
    const cards = cloneDeep(this.state.cards).map(card => ({
      ...card,
      state: CARD_STATE.OPEN,
    }));
    this.setState({
      cards,
      glimpse: true,
    });
    this.timeout = setTimeout(() => {
      this.closeOpenCards();
      this.setState({
        glimpse: false,
      });
    }, this.props.glimpse);
  };

  getOpenCards = () =>
    cloneDeep(this.state.cards).filter(card => card.state === CARD_STATE.OPEN);

  openCard = position => {
    const cards = cloneDeep(this.state.cards);
    cards[position].state =
      cards[position].state === CARD_STATE.CLOSED
        ? CARD_STATE.OPEN
        : cards[position].state;

    this.setState({ cards }, this.checkForPair);
  };

  closeOpenCards = () => {
    clearTimeout(this.timeout);
    const cards = cloneDeep(this.state.cards).map(card => ({
      ...card,
      state: card.state === CARD_STATE.OPEN ? CARD_STATE.CLOSED : card.state,
    }));

    this.setState({ cards });
  };

  findCardPair = () => {
    const cards = cloneDeep(this.state.cards).map(card => ({
      ...card,
      state: card.state === CARD_STATE.OPEN ? CARD_STATE.FOUND : card.state,
    }));

    this.setState({ cards });
  };

  hasGameEnded = () => {
    cloneDeep(this.state.cards).some(card => card.state !== CARD_STATE.FOUND);
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
    if (this.state.glimpse) {
      return;
    }
    const openCards = this.getOpenCards(this.state);

    switch (openCards.length) {
      case 0: {
        this.openCard(position);
        break;
      }
      case 1: {
        this.openCard(position);
        break;
      }
      default: {
        break;
      }
    }
  };

  getMemoryCards() {
    return cloneDeep(this.state.cards).map((card, position) => (
      <MemoryCard
        onClick={this.handleCardClick(position)}
        key={position}
        state={card.state}
      >
        {card.display}
      </MemoryCard>
    ));
  }

  render() {
    return <div className="memory-game">{this.props.children}</div>;
  }
}

export default MemoryGame;
