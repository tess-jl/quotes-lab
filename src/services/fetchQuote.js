export const fetchQuote = () => {
  return fetch('http://futuramaapi.herokuapp.com/api/quotes/1')
    .then(res => res.json())
    .then(res => res[0]);
};

//returns an array of quotes
export const fetchCharacterQuotes = (character, count) => {
  return fetch(`http://futuramaapi.herokuapp.com/api/characters/${character}/${count}`)
    .then(res => res.json());
};
