import React from 'react'; 
import { shallow } from 'enzyme';
import QuoteDisplayer from './QuoteDisplayer.js';
import { fetchQuote } from '../services/fetchQuote';

jest.mock('../services/fetchQuote.js');

describe('tests for QuoteDisplayer', () => {
  it('can fetch', () => { 
    const wrapper = shallow(<QuoteDisplayer />);
    const container = wrapper.instance();

    return container.handleClick()
      .then(() => {
        expect(fetchQuote).toHaveBeenCalled();
        expect(wrapper.state('quoteObj')).toEqual({
          character: 'test character', 
          quote: 'test quote', 
          image: 'test image url'
        });
      });
  });
});
