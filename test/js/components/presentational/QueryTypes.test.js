import React from 'react'
import ReactDOM from 'react-dom'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import QueryTypes from '../../../../src/js/components/presentational/QueryTypes'

configure({ adapter: new Adapter() })

describe('<QueryTypes />', () => {
    it('should render QueryTypes with 3 children', () => {
        const wrapper = shallow(<QueryTypes />)
        expect(wrapper.find('.form-check').length).toBe(3)
    })
})
