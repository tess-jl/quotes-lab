import React, { Component } from 'react'; 
import Button from '../components/Button/Button.js';
import Quote from '../components/Quote/Quote.js';
import fetchQuote from '../services/fetchQuote.js';

export default class QuoteDisplayer extends Component {
  state = {
    quoteObj: {
      character: '', 
      quote: '',
      image: ''
    }
  }

  handleClick = () => {
    return fetchQuote()
      .then(quote => this.setState({ quoteObj: quote }));
  }; 

  render() {
    return (
      <>
        <Button onClick={this.handleClick} />
        <Quote {...this.state.quoteObj}  />
      </>

    );
  }
}

