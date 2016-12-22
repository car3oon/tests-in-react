import React from 'react';
import { shallow } from 'enzyme';
import App, {sum, getListIds, getNumberOfItems, isEmptyList} from './App';

describe('App tests', () =>  {

  var listMock = {
      listItem1: {},
      listItem2: {},
      listItem3: {}
  };

  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders welcome message', () => {
    const wrapper = shallow(<App />);
    const welcome = <h3>Tests in React</h3>;

    expect(wrapper.contains(welcome)).toEqual(true);
  });

  it('check getting list ids', () => {
    var expectedListItems = ['listItem1', 'listItem2', 'listItem3'];
    var actualListItems = getListIds(listMock);

    expect(actualListItems).toEqual(expectedListItems);
  });

  it('returns numbers of items', () => {
    var expectedListItemsCount = Object.keys(listMock).length;
    var actualListItemsCount = getNumberOfItems(listMock);

    expect(actualListItemsCount).toBe(expectedListItemsCount);
  });

  it('check if list is empty', () => {
    var checkIfEmptyList = isEmptyList(listMock);

    expect(checkIfEmptyList).toBeDefined();
    expect(checkIfEmptyList).toBe(false);
    expect(checkIfEmptyList).not.toBe(true);
  });

  it('sums numbers', () => {
    expect(sum(1, 2)).toEqual(3);
    expect(sum(2, 2)).toEqual(4);
  });

});
