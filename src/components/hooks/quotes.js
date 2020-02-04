import { useState, useEffect } from 'react';
import fetchQuote from '../../services/fetchQuote.js';

const useQuote = () => {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    fetchQuote()
      .then(newQuote => setQuote(newQuote));
  }, []);

  return quote; 
};
