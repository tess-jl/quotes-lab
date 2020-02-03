export const fetchQuote = () => {
  return fetch('futuramaapi.herokuapp.com/api/quotes/1')
    .then(res => {
      if(res.ok) return res.json(); 
      throw `Response: ${res.status}`;
    });
};

