import React from 'react';
import { mount } from 'enzyme';

import DirectoryPage from './DirectoryPage';
import contactsData from '../../_mocks_/data.json';

jest.mock('../apiCalls');
jest.mock('axios', () => {
  const exampleArticles = [{ title: 'test article', url: 'test url' }];

  return {
    get: jest.fn(() => Promise.resolve(exampleArticles))
  };
});

describe('Tests for the DirectoryPage', () => {
  const props = {
    activeContact: 'Aogan.brown@example.com',
    alphabet: 'A',
    contacts: contactsData,
    fetchData: jest.fn(),
    getContacts: jest.fn().mockResolvedValue({})
  };
  let wrapper;

  beforeAll(() => {
    wrapper = mount(<DirectoryPage {...props} />);
  });

  it('Should render DirectoryPage correctly', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });
});
