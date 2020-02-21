import React from 'react'
import { shallow } from 'enzyme'

import Alphabet from './Alphabets'

describe('Tests for the Alphabet section', () => {
    const props = {
        activeContact: null,
        alphabet: "A",
        contacts: [],
        onClickAlphabet: jest.fn().mockResolvedValue({})
    }
    let wrapper

    beforeAll(() => {
        wrapper = shallow(<Alphabet {...props} />)
    })

    it('Should render the Alphabet section', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('Should render the Alphabet section', () => {
        wrapper.find('button').at(0).simulate('click')
    })
})

