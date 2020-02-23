import React from 'react';
import { mount } from 'enzyme';

import Contacts from './Contacts';
import contactsData from '../../_mocks_/data.json';

describe('Tests for the Contacts section', () => {
  const props = {
    activeContactEmail: 'Aogan.brown@example.com',
    activeAlphabet: 'A',
    contacts: contactsData,
    onClickContact: jest.fn(),
    closeContactDropdown: jest.fn()
  };
  let wrapper;

  beforeAll(() => {
    wrapper = mount(<Contacts {...props} />);
  });

  it('Should render the Contacts section', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should render the Contacts', () => {
    expect(wrapper.find('li')).toBeDefined();
    expect(wrapper.find('li')).toHaveLength(3);
  });

  it('Should render the Contact details on click', () => {
    expect(wrapper.find('span')).toBeDefined();
    wrapper
      .find('span')
      .at(0)
      .simulate('click');
    expect(props.onClickContact).toHaveBeenCalled();
  });
});
