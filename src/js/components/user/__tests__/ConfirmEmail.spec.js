import React from 'react';
import { ConfirmEmail } from '../ConfirmEmail';
import LoginHeader from '../../login/components/header'
import LoginFooter from '../../login/components/footer'
import MainContent from '../components/main-content'
import { shallow } from 'enzyme';

describe('ConfirmEmail', () => {
  it('should render correctly', () => {
    const wrapper = shallow( <ConfirmEmail/> );
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find(LoginHeader).length).toEqual(1);
    expect(wrapper.find(MainContent).length).toEqual(1);
    expect(wrapper.find(LoginFooter).length).toEqual(1);
  })

  it('should have a main content with the right props', () => {
    const wrapper = shallow( <ConfirmEmail params={{}} /> );
    expect(Object.keys(wrapper.find(MainContent).props())).toEqual([
      'confirmed', 'status', 'token'
    ])

  })
});