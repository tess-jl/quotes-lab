import React, { useState } from 'react'; 
import Button from '../components/Button/Button.js';
import Quote from '../components/Quote/Quote.js';
import { fetchQuote } from '../services/fetchQuote.js';


const QuoteDisplayerFn = () => {
  const [quoteObj, onClick] = useState({
    character: '', 
    quote: '',
    image: ''
  });

  const handleClick = () => {
    return fetchQuote()
      .then(quote => onClick({ quoteObj: quote }));
  };

  //no useEffect needed

  return (
    <>
      <Button onClick={handleClick} />
      <Quote {...quoteObj} />
    </>
  );
}; 

export default QuoteDisplayerFn; 
