import React from 'react'; 
import PropTypes from 'prop-types'; 

const Button = ({ handleClick }) => (
  <button onClick={handleClick} >click for a random quote!</button>
); 

Button.propTypes = {
  handleClick: PropTypes.func.isRequired
}; 

export default Button; 
