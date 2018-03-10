import React from 'react';

export const CARD_STATE = {
  CLOSED: 'CLOSED',
  OPEN: 'OPEN',
  FOUND: 'FOUND',
};

const CardContent = ({ children, ...props }) => (
  <div {...props} className="memory-game--memory-card--content">
    {children}
  </div>
);

const MemoryCard = ({ children, state, onClick, ...props }) => {
  const classes = [
    'memory-game--memory-card',
    state === CARD_STATE.FOUND
      ? 'memory-game--memory-card__found'
      : state === CARD_STATE.OPEN
        ? 'memory-game--memory-card__open'
        : 'memory-game--memory-card__closed',
  ].join(' ');

  return (
    <div className="memory-game--memory-slot">
      <button {...props} className={classes} onClick={onClick}>
        <CardContent>{children}</CardContent>
      </button>
    </div>
  );
};

export default MemoryCard;
