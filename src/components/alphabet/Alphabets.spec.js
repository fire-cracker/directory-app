import React from 'react';
import { shallow } from 'enzyme';

import Alphabet from './Alphabets';

describe('Tests for the Alphabet section', () => {
  const props = {
    activeContactEmail: 'Aogan.brown@example.com',
    activeAlphabet: 'A',
    contacts: [],
    onClickAlphabet: jest.fn()
  };
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Alphabet {...props} />);
  });

  it('Should render the Alphabet section', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should click button', () => {
    wrapper
      .find('button')
      .at(0)
      .simulate('click');
    expect(props.onClickAlphabet).toHaveBeenCalled();
  });
});
