import React from "react";
import Navbar from "./components/Navbar.js";
import QuoteCard from "./components/QuoteCard";
import QuoteList from "./components/QuoteList";
import QuoteForm from "./components/QuoteForm";
import axios from "axios";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AleatoireQuote: "",
    };
    this.getAleatoireQuote = this.getAleatoireQuote.bind(this);
  }

  getAleatoireQuote() {
    axios
      .get("https://thesimpsonsquoteapi.glitch.me/quotes")

      .then((response) => response.data)

      .then((data) => {
        this.setState({
          AleatoireQuote: data[0], // Reflechir car pas possible
        });
      });
  }
  // reflechir comment écrire le composant getAleatoirequote
  render() {
    return (
      <div className="App">
        <Navbar />
        <QuoteForm />
        <QuoteList />
        <QuoteCard
          key={this.state.AleatoireQuote.quote}
          quote={this.state.AleatoireQuote.quote}
          image={this.state.AleatoireQuote.image}
          character={this.state.AleatoireQuote.character}
        />
        <button type="button" onClick={this.getAleatoireQuote}>
          Get aleatoire quote
        </button>
      </div>
    );
  }
}

export default App;
