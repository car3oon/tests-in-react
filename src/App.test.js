import React from 'react';
import { shallow } from 'enzyme';
import App, {sum, getListIds} from './App';

describe('App tests', () =>  {

  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders welcome message', () => {
    const wrapper = shallow(<App />);
    const welcome = <h3>Tests in React</h3>;
    expect(wrapper.contains(welcome)).toEqual(true);
  });

  it('check getting list ids', () => {
    var listMock = {
      listItem1: {},
      listItem2: {},
      listItem3: {}
    };
    var expectedListItems = ['listItem1', 'listItem2', 'listItem3'];
    var actualListItems = getListIds(listMock);

    expect(actualListItems).toEqual(expectedListItems);
  })

  it('sums numbers', () => {
    expect(sum(1, 2)).toEqual(3);
    expect(sum(2, 2)).toEqual(4);
  });

});
