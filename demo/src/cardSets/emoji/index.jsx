import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  font-size: 120px;
`;

const cards = [
  <Wrap>
    <span role="img" aria-label="Poo">
      💩
    </span>
  </Wrap>,
  <Wrap>
    <span role="img" aria-label="Shrug">
      🤷
    </span>
  </Wrap>,
  <Wrap>
    <span role="img" aria-label="Heart">
      ❤️
    </span>
  </Wrap>,
  <Wrap>
    <span role="img" aria-label="Joy">
      😂
    </span>
  </Wrap>,
  <Wrap>
    <span role="img" aria-label="Heart Eyes">
      😍
    </span>
  </Wrap>,
  <Wrap>
    <span role="img" aria-label="Smile">
      😊
    </span>
  </Wrap>,
  <Wrap>
    <span role="img" aria-label="Thinking">
      🤔
    </span>
  </Wrap>,
  <Wrap>
    <span role="img" aria-label="Fire">
      🔥
    </span>
  </Wrap>,
];
export default cards;
