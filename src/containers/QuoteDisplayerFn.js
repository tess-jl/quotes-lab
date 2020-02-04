import React from 'react'; 
import Button from '../components/Button/Button.js';
import Quote from '../components/Quote/Quote.js';

import { useQuote } from '../components/hooks/quotes.js';


const QuoteDisplayerFn = () => {
  const { quote, searchQuote } = useQuote();
 
  return (
    <>
      <Button handleClick={searchQuote} />
      { quote.character ? <Quote {...quote} /> : 'loading'}
    </>
  );
}; 

export default QuoteDisplayerFn; 
