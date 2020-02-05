import React from 'react'; 
import Button from '../components/Button/Button.js';
import Quote from '../components/Quote/Quote.js';
import { useQuote } from '../components/hooks/quotes.js';
import Parameters from '../components/Parameters/Parameters.js';


const QuoteDisplayerFn = () => {
  const { quote, searchQuote, searchQuotesForCharacterAndCount, quotesByParameters } = useQuote();
  
  // const quotesFromArray = () => {
  //   if(quotesByParameters.length > 0) {
  //     const quoteItems = quotesByParameters.map((quote, i) => (
  //       <li key={i}>
  //         <Quote {...quote} /> 
  //       </li>
  //     ));
  //     return (
  //       <ul>
  //         {quoteItems}
  //       </ul>
  //     );
  //   }
  //   return false;
  // }; 

  const quotesFromArray = () => {
    return quotesByParameters.map((quote, i) => (
      <li key={i}>
        <Quote {...quote} /> 
      </li>
    ));
  }; 

  return (
    <>
      <Parameters handleSelection={searchQuotesForCharacterAndCount}/>

      <Button handleClick={searchQuote} />
{/* 
      {
        quotesByParameters.length > 0 ? quotesfromArray() <ul>{quotesFromArray}</ul> : 'loading'
      } */}

      { 
        quote.character ? <Quote {...quote} /> : 'loading'
      }

    </>
  );
}; 

export default QuoteDisplayerFn; 
