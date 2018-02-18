import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Counter from './Counter';

describe('<Counter />', () => {
  describe('when `counter` is undefined', () => {
    const container = shallow(<Counter />);
    it('should return an empty placeholder ', () => {
      expect(toJson(container)).toMatchSnapshot('undefinedCounter');
    });
  });

  describe('when a valid `counter is passed`', () => {
    const container = shallow(<Counter counter={42} />);
    it('should render the passed value as a child of the counter', () => {
      expect(toJson(container)).toMatchSnapshot('undefinedCounter');
    });
  });
});
