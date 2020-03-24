import React, { useState } from 'react';
import PropTypes from 'prop-types';

//state --> character and count here in local scope to track what user is "in the process" of selecting

const characters = [ 'Bender', 'Fry', 'Leela', 'Professor Farnsworth', 'Amy', 'Zapp Brannigan', 'Lurr', 'Dr Zoidberg', 'Linda the reporter', 'Bob Barker', 'Hermes', 'Morgan Proctor', 'Mom', 'Robot Mob', 'Giant Bender', 'Kif', 'Don bot'];

const Parameters = ({ handleSelection }) => {
  const [character, setCharacter] = useState('Bender');
  const [count, setCount] = useState(0);
  
  return (
    <>
      <select placeholder="select character" onChange={({ target }) => setCharacter(target.value)}>
        {characters.map(selectedCharacter => <option key={selectedCharacter}>{selectedCharacter}</option>)}
      </select>

      <input type="number" value={count} min="1" onChange={({ target }) => setCount(target.value)}></input>

      <button onClick={() => handleSelection(character, count)}>find quotes by character and count</button>
    </>
  ); 
};

Parameters.propTypes = {
  handleSelection: PropTypes.func.isRequired
}; 

export default Parameters;
