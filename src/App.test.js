import React from 'react';
import { shallow } from 'enzyme';
import App, {sum} from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const welcome = <h3>Tests in React</h3>;
  expect(wrapper.contains(welcome)).toEqual(true);
});

it('sums numbers', () => {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(2, 2)).toEqual(4);
});
