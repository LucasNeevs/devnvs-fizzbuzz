import React from 'react';
import { Typography } from '@material-ui/core';
import chai, { expect } from 'chai';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chaiEnzyme from 'chai-enzyme';
import Appbar from './Appbar';

chai.use(chaiEnzyme());
Enzyme.configure({ adapter: new Adapter() });

describe('Appbar', (): void => {
  describe('Smoke tests', (): void => {
    it('Should exist Appbar', (): void => {
      const wrapper = shallow(<Appbar />);
      // eslint-disable-next-line no-unused-expressions
      expect(wrapper).to.exist;
    });
    it('Should exist title equal "Users"', (): void => {
      const wrapper = shallow(<Appbar />);
      expect(wrapper.find(Typography).props().children).to.be.equal('Users');
    });
  });
});
