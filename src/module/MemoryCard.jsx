import React from 'react';

export const CARD_STATE = {
  CLOSED: 'CLOSED',
  OPEN: 'OPEN',
  FOUND: 'FOUND',
};

const Card = ({ children, state, ...props }) => {
  const classes = [
    'memory-game--memory-card',
    state === CARD_STATE.FOUND
      ? 'memory-game--memory-card__found'
      : state === CARD_STATE.OPEN
        ? 'memory-game--memory-card__open'
        : 'memory-game--memory-card__closed',
  ].join(' ');

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};

const CardContent = ({ children, ...props }) => (
  <div {...props} className="memory-game--memory-card--content">
    {children}
  </div>
);

const MemoryCard = ({ children, state, onClick }) => {
  return (
    <Card onClick={onClick} state={state}>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default MemoryCard;
