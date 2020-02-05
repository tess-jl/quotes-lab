import { useState, useEffect } from 'react';
import { fetchQuote, fetchCharacterQuotes } from '../../services/fetchQuote.js';

export const useQuote = () => {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(true);

  //need state for selectedCharacter and selectedCount
  const [quotesByParameters, setQuotesByParameters] = useState([]);
  const [selectedCharacter, setCharacter] = useState();
  const [selectedCount, setCount] = useState();

  const searchQuotesForCharacterAndCount = (selectedCharacter, selectedCount) => {
    fetchCharacterQuotes(selectedCharacter, selectedCount)
      .then(() => {
        setQuotesByParameters();
      });
  };

  const handleCharacterChange = ({ target }) => {
    setCharacter(target.value);
  };

  const handleCountChange = ({ target }) => {
    setCount(target.value);
  };

  useEffect(() => {
    searchQuotesForCharacterAndCount();
  }, [selectedCharacter, selectedCount]);



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

  return { quote, searchQuote, loading, handleCharacterChange,handleCountChange, searchQuotesForCharacterAndCount, quotesByParameters }; 
};
