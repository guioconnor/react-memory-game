import React from 'react';
import styled from 'styled-components';

const birdImages = [
  'tile-01',
  'tile-02',
  'tile-03',
  'tile-04',
  'tile-05',
  'tile-06',
  'tile-07',
  'tile-08',
];

const getImageUrl = fileName =>
  `https://firebasestorage.googleapis.com/v0/b/tiles-ba0e8.appspot.com/o/${fileName}.svg?alt=media`;

const Wrap = styled.div`
  font-size: 120px;
  width: 105%;
  margin: -2.5%;
`;

const Image = styled.img`
  width: 100%;
  display: block;
`;

const cards = birdImages.map(imageName => (
  <Wrap>
    <Image src={getImageUrl(imageName)} alt={imageName} />
  </Wrap>
));

export default cards;
