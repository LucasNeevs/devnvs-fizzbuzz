import React from 'react';
import chai, { expect } from 'chai';
import Enzyme, { shallow, mount } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

chai.use(chaiEnzyme());
Enzyme.configure({ adapter: new Adapter() });

describe('App', (): void => {
  describe('Smoke tests', (): void => {
    it('Should exist module App', (): void => {
      const wrapper = shallow(<App />);
      // eslint-disable-next-line no-unused-expressions
      expect(wrapper).to.exist;
    });
  });
});
