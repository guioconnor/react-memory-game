import React, { PureComponent } from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import MemoryGame from './index';
import { CARD_STATE } from './MemoryCard';

jest.useFakeTimers();

const countClosedCards = cards =>
  cards.filter(card => card.state === CARD_STATE.CLOSED).length;

const countCardsWithValue = (cards, value) =>
  cards.filter(card => card.value === value).length;

const clickCardAtPosition = (Game, position) => {
  Game.find('.memory-game--memory-grid')
    .childAt(position)
    .find('button')
    .simulate('click');
};

describe('Memory Game State machine', () => {
  describe('initial state', () => {
    const Game = mount(
      <MemoryGame cards={[1, 2, 3, 4, 5, 6, 7, 8]}>
        <MemoryGame.Board />
      </MemoryGame>,
    );

    it('all cards on the board should be closed ', () => {
      expect(countClosedCards(Game.state('cards'))).toEqual(16);
    });
    it('the board should contain two cards of each value', () => {
      Game.state('cards').forEach(card => {
        expect(countCardsWithValue(Game.state('cards'), card.value)).toEqual(2);
      });
    });
    xit('clicking on a card during a glimpse should not alter its state', () => {});

    xit('should throw an error if the wrong number of cards or pairs is passed', () => {});
  });

  describe('when no card is open', () => {
    const Game = mount(
      <MemoryGame dryRun cards={[1, 2, 3, 4, 5, 6, 7, 8]}>
        <MemoryGame.Board />
      </MemoryGame>,
    );

    it('should be possible to open a closed card', () => {
      clickCardAtPosition(Game, 0);
      expect(Game.state('cards')[0].state).toBe(CARD_STATE.OPEN);
    });
  });

  describe('when one card is open', () => {
    const Game = mount(
      <MemoryGame dryRun cards={[1, 2, 3, 4, 5, 6, 7, 8]}>
        <MemoryGame.Board />
      </MemoryGame>,
    );
    clickCardAtPosition(Game, 0);

    it('should be possible to turn a second closed card', () => {
      clickCardAtPosition(Game, 1);
      expect(Game.state('cards')[1].state).toBe(CARD_STATE.OPEN);
    });
  });

  describe("when two cards are open and don't match", () => {
    const Game = mount(
      <MemoryGame dryRun cards={[1, 2, 3, 4, 5, 6, 7, 8]}>
        <MemoryGame.Board />
      </MemoryGame>,
    );

    clickCardAtPosition(Game, 0);
    clickCardAtPosition(Game, 1);

    it('should not be possible to open a third closed card', () => {
      clickCardAtPosition(Game, 2);
      expect(Game.state('cards')[2].state).toBe(CARD_STATE.CLOSED);
    });

    it('both cards should be marked as closed', () => {
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 700);
      jest.runAllTimers();
      expect(Game.state('cards')[0].state).toBe(CARD_STATE.CLOSED);
      expect(Game.state('cards')[1].state).toBe(CARD_STATE.CLOSED);
    });

    it('should be possible to turn another closed card', () => {
      clickCardAtPosition(Game, 0);
      expect(Game.state('cards')[0].state).toBe(CARD_STATE.OPEN);
    });

    describe('when there are cards FOUND', () => {
      xit("clicking on a FOUND card should not alter it's state", () => {});
    });
  });
});

describe('when two cards are open and match', () => {
  const Game = mount(
    <MemoryGame dryRun cards={[1, 2, 3, 4, 5, 6, 7, 8]}>
      <MemoryGame.Board />
    </MemoryGame>,
  );

  clickCardAtPosition(Game, 0);
  clickCardAtPosition(Game, 8);

  it('both cards should marked as found', () => {
    expect(Game.state('cards')[0].state).toBe(CARD_STATE.FOUND);
    expect(Game.state('cards')[8].state).toBe(CARD_STATE.FOUND);
  });

  it('should not be possible to change the state of a found card', () => {
    clickCardAtPosition(Game, 8);
    expect(Game.state('cards')[8].state).toBe(CARD_STATE.FOUND);
  });

  it('should be possible to turn another closed card', () => {
    clickCardAtPosition(Game, 7);
    expect(Game.state('cards')[7].state).toBe(CARD_STATE.OPEN);
  });
});

xdescribe('<MemoryGame.Reset />', () => {
  it('should reshuffle the cards', () => {});

  it('should mark the cards as CLOSED', () => {});

  describe('when `glimpse` is passed as prop', () => {
    it('should display the cards OPEN for the time specified', () => {});

    it('should close the cards after the time specified', () => {});
  });
});

xdescribe('<MemoryGame.Board />', () => {
  it('should render a MemoryGrid with cards', () => {});
});

xdescribe('<MemoryGame.MovesCounter />', () => {
  it('should a counter with the amount of pairs attempted', () => {});
});

xdescribe('<MemoryGame.PairsFoundCounter />', () => {
  it('should render a counter with the amount of pairs found', () => {});
});
