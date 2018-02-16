import React from 'react';
import styled from 'styled-components'

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80vmin;
  height: 80vmin;
  margin: 0 auto 0 auto;
  user-select: none;
  background: green;

  & a {
    width: auto;
  }
`;

export default (({ children }) => <Grid>{children}</Grid>);