import React from 'react';
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
  opacity: ${state => (state.state === CARD_STATE.FOUND ? '.8' : '1')};
  color: #333;
  padding: 10%;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const CardContent = styled.div`
  display: ${state => (state.state === CARD_STATE.CLOSED ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const MemoryCard = ({ children, state, onClick }) => {
  return (
    <Card onClick={onClick} state={state}>
      <CardContent state={state}>{children}</CardContent>
    </Card>
  );
};

export default MemoryCard;
