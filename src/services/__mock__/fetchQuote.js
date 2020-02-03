const fetchQuote = () => {
  return Promise.resolve({
    character: 'test character', 
    quote: 'test quote', 
    image: 'test image url'
  });
}; 

export default fetchQuote; 
