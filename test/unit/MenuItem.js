import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'
import { Link } from 'react-router'
import MenuItem from '../../components/MenuItem'


describe('unit/MenuItem', () => {
    it('renders Link w/ correct path and name', () => {
        const wrapper = shallow(<MenuItem path="/test/" name="Test" />)
        expect(wrapper.contains(<Link to="/test/" className="menu__link" activeClassName="menu__link--ctive">Test</Link>)).to.equal(true)
    });
});