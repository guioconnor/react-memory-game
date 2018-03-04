import React from 'react';
import styled from 'styled-components';
import { shuffle } from 'lodash';

const Wrap = styled.div`
  font-size: 120px;
`;

const letters = shuffle([
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'x',
  'y',
  'z',
]).slice(0, 8);

const cards = letters.map((letter, i, arr) => [
  <Wrap>{letter.toUpperCase()}</Wrap>,
  <Wrap>{letter}</Wrap>,
]);

export default cards;
