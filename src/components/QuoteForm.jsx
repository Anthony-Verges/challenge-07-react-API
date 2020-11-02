import React from 'react';
import './QuoteForm.css';


const MAX_LENGTH = 30;

class QuoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {character: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        if (event.target.value.length <= MAX_LENGTH) {
            this.setState({ character: event.target.value });
          }
    }

    handleSubmit(event) {
        event.preventDefault();
    }


    render() {
        const maximumReached = this.state.character.length >= MAX_LENGTH;

        const numRemaining = MAX_LENGTH - this.state.character.length;

      return (
        <form
          className="QuoteForm" onSubmit={this.handleSubmit}
        >
          <label htmlFor="character">Character:</label>
          <input
            className={maximumReached ? 'length-maximum-reached' : 'length-ok'}
            id="character"
            value={this.state.character}
            name="character"
            type="text"
            onChange={this.handleChange}
          />
          
        <small className="remaining-characters">
          {numRemaining} remaining characters
        </small>

        <p>
            You typed : {this.state.character}
        </p>
        </form>
      );
    }
  }


export default QuoteForm;
