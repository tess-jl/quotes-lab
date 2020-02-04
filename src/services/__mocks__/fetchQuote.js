export const fetchQuote = jest.fn(() => {
  return Promise.resolve({
    character: 'test character', 
    quote: 'test quote', 
    image: 'test image url'
  });
}); 
