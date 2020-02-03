import React from 'react'; 
import PropTypes from 'prop-types'; 

const Button = ({ onClick }) => (
  <button className={onClick}>click for a quote!</button>
); 

Button.propTyes = {
  onClick: PropTypes.func.isRequired
}; 

export default Button; 
