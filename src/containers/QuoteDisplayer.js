import React, { Component } from 'react'; 
import PropTypes from 'prop-types'; 
import Button from '../components/Button/Button.js';

export default class QuoteDisplayer extends Component {
  state = {
    quoteObj: {
      character: '', 
      quote: '',
      image: ''
    }
  }

  handleClick = () => {
    //fetch 
    //set state of current quote
  }; 


  render() {
    return (
      <Button onClick={this.handleClick} />

    );
  }
}


