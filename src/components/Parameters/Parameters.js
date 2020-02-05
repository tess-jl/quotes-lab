import React, { useState } from 'react';
import PropTypes from 'prop-types';

//state --> character and count here in local scope to track what user is "in the process" of selecting

const characters = [ 'Bender', 'Fry', 'Leela', 'Professor Farnsworth', 'Amy', 'Zapp Brannigan', 'Lurr', 'Dr Zoidberg', 'Linda the reporter', 'Bob Barker', 'Hermes', 'Morgan Proctor', 'Mom', 'Robot Mob', 'Giant Bender', 'Kif', 'Don bot'];

const Parameters = ({ handleSelection }) => {
  const [character, setCharacter] = useState();
  const [count, setCount] = useState();
  
  return (
    <>
      <select placeholder="select character">{character}</select>

      <input type="number" min="1">{count}</input>

      <button onClick={handleSelection}>find quotes by character and count</button>
    </>
  ); 
};

Parameters.propTypes = {
  handleSelection: PropTypes.func.isRequired
}; 

export default Parameters;
