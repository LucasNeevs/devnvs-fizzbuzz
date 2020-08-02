import React from 'react';
import { Typography } from '@material-ui/core';
import chai, { expect } from 'chai';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';
import Axios from './Axios';

chai.use(chaiEnzyme());
Enzyme.configure({ adapter: new Adapter() });

describe('Axios', (): void => {
  describe('Smoke tests', (): void => {
    it('Should exist Axios', (): void => {
      const wrapper = shallow(<Axios />);
      // eslint-disable-next-line no-unused-expressions
      expect(wrapper).to.exist;
    });
    it('Should exist title equal "Users"', (): void => {
      const wrapper = shallow(<Axios />);
      expect(wrapper.find(Typography).props().children).to.be.equal('Users');
    });
  });
});