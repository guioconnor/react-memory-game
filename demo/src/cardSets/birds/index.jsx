import React from 'react';
import styled from 'styled-components';

const birdImages = [
  'canary',
  'cardinal',
  'eagle',
  'falcon',
  'toucan',
  'b2',
  'b3',
  'b4',
];

const getImageUrl = fileName =>
  `https://firebasestorage.googleapis.com/v0/b/dinos-ef87d.appspot.com/o/birds%2F${fileName}.svg?alt=media`;

const Wrap = styled.div`
  font-size: 120px;
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
