import React from 'react'; 
import Button from '../components/Button/Button.js';
import Quote from '../components/Quote/Quote.js';

import { useQuote } from '../components/hooks/quotes.js';

import Parameters from '../components/Parameters/Parameters.js';


const QuoteDisplayerFn = () => {
  const { quote, searchQuote, searchQuotesForCharacterAndCount } = useQuote();

  return (
    <>
      <Parameters handleSelection={searchQuotesForCharacterAndCount}/>

      <Button handleClick={searchQuote} />
    
      { 
        quote.character && quote.count ? <SelectedQuotes {...quote} /> : quote.character ? <Quote {...quote} /> : 'loading'
      }
    </>
  );
}; 

export default QuoteDisplayerFn; 
