import { useState, useEffect } from 'react';
import { fetchQuote, fetchCharacterQuotes } from '../../services/fetchQuote.js';

export const useQuote = () => {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(true);

  const [quotesByParameters, setQuotesByParameters] = useState([]);

  const searchQuotesForCharacterAndCount = (selectedCharacter, selectedCount) => {
    fetchCharacterQuotes(selectedCharacter, selectedCount)
      .then(() => {
        setQuotesByParameters();
      });
  };
  useEffect(() => {
    searchQuotesForCharacterAndCount();
  }, []);


  const searchQuote = () => {
    fetchQuote()
      .then(newQuote => {
        setQuote(newQuote);
        setLoading(false);
      });
  };
  useEffect(() => {
    setLoading(true);
    searchQuote();
  }, []);

  return { quote, searchQuote, loading, searchQuotesForCharacterAndCount, quotesByParameters }; 
};
