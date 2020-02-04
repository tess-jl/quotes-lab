import React from 'react'; 
import PropTypes from 'prop-types'; 

const Quote = ({ character, quote, image }) => {
  return (
    <>
      <img src={image} />
      <p>{quote} --{character}</p>
    </>
  );
}; 

Quote.propTypes = {
  character: PropTypes.string.isRequired, 
  quote: PropTypes.string.isRequired, 
  image: PropTypes.string.isRequired
}; 

export default Quote; 
