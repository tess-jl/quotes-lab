import React from 'react'; 
import Button from '../components/Button/Button.js';
import Quote from '../components/Quote/Quote.js';
import { useQuote } from '../components/hooks/quotes.js';
import Parameters from '../components/Parameters/Parameters.js';


const QuoteDisplayerFn = () => {
  const { quote, searchQuote, searchQuotesForCharacterAndCount, quotesByParameters } = useQuote();
  
  const quotesFromArray = () => {
    if(quotesByParameters.length > 0) {
      const quoteItems = quotesByParameters.map((quote, i) => (
        <li key={i}>
          <Quote {...quote} /> 
        </li>
      ));
      return (
        <ul>
          {quoteItems}
        </ul>
      );
    }
    return false;
  }; 


  return (
    <>
      <Parameters handleSelection={searchQuotesForCharacterAndCount}/>

      <Button handleClick={searchQuote} />

      {
        quotesByParameters.length > 0 ? quotesFromArray() : ''
      }

      { 
        quote.character ? (<> <h2> ... this is your random quote</h2> <Quote {...quote} />  </>)  : 'loading'
      }

    </>
  );
}; 

export default QuoteDisplayerFn; 
