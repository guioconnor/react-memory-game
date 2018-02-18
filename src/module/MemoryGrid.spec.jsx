import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MemoryGrid from './MemoryGrid';

describe('<MemoryGrid>', () => {
  const MockChildren = () => <div>Mock Children</div>;
  const container = shallow(<MemoryGrid>{MockChildren}</MemoryGrid>);

  it('should render a container with children', () => {
    expect(toJson(container)).toMatchSnapshot('MemoryGrid');
  });
});
