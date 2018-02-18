import React, { PureComponent } from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MemoryCard, { CARD_STATE } from './MemoryCard';

describe('<MemoryCard />', () => {
  const MockChildren = () => <div>Mock Children</div>;

  describe('when card state is CLOSED', () => {
    const container = shallow(
      <MemoryCard state={CARD_STATE.CLOSED}>
        <MockChildren />
      </MemoryCard>,
    );
    it('should render a closed button with children inside', () => {
      expect(toJson(container)).toMatchSnapshot('ClosedMemoryCard');
    });
  });

  describe('when card sate is OPEN', () => {
    const container = shallow(
      <MemoryCard state={CARD_STATE.OPEN}>
        <MockChildren />
      </MemoryCard>,
    );
    it('should render an open button with children inside', () => {
      expect(toJson(container)).toMatchSnapshot('OpenMemoryCard');
    });
  });

  describe('when card sate is FOUND', () => {
    const container = shallow(
      <MemoryCard state={CARD_STATE.FOUND}>
        <MockChildren />
      </MemoryCard>,
    );
    it('should render an found button with children inside', () => {
      expect(toJson(container)).toMatchSnapshot('FoundMemoryCard');
    });
  });

  describe('when card is clicked', () => {
    const mockClickHandler = jest.fn();
    const container = shallow(
      <MemoryCard state={CARD_STATE.FOUND} onClick={mockClickHandler}>
        <MockChildren />
      </MemoryCard>,
    );

    it('should call the callback fuction', () => {
      container.simulate('click');
      expect(mockClickHandler.mock.calls.length).toEqual(1);
    });
  });
});
