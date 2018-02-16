import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const CARD_STATE = {
  CLOSED: 'CLOSED',
  OPEN: 'OPEN',
  FOUND: 'FOUND',
};

const Card = styled.button`
  cursor: pointer;
  flex 1 0 0%;
  background: rgba(255, 255, 255, .8);
  background: ${state => {
    return state.state === CARD_STATE.CLOSED ? 'red' : 'blue';
  }};
  color: #333;
  padding: 10%;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
`;

const MemoryCard = ({ children, state, onClick }) => {
  return (
    <Card onClick={onClick} state={state}>
      {children}
    </Card>
  );
};

MemoryCard.propTypes = {};

export default MemoryCard;
