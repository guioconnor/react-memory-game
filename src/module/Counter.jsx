import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-width: 50px;
  text-align: center;
`;

const Counter = ({ counter }) => <Container>{counter}</Container>;

export default Counter;
