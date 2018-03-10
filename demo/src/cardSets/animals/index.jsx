//firebasestorage.googleapis.com/v0/b/dinos-ef87d.appspot.com/o/animals%2Fbear.svg?alt=media

import React from 'react';
import styled from 'styled-components';

const animalImages = [
  'bear',
  'beaver',
  'butterfly',
  'cat',
  'chameleon',
  'giraffe',
  'owl',
  'penguin',
];

const getImageUrl = fileName =>
  `https://firebasestorage.googleapis.com/v0/b/dinos-ef87d.appspot.com/o/animals%2F${fileName}.svg?alt=media`;

const Wrap = styled.div``;

const Silhouette = styled.div`
  filter: brightness(0%) saturate(0%);
`;

const Image = styled.img`
  width: 100%;
  display: block;
`;

const cards = animalImages.map(imageName => [
  <Wrap>
    <Image src={getImageUrl(imageName)} alt={imageName} />
  </Wrap>,
  <Silhouette>
    <Image src={getImageUrl(imageName)} alt={imageName} />
  </Silhouette>,
]);

export default cards;
