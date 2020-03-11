import React, { Component } from "react";
import "./App.css";

export class App extends Component {
  state = {
    value: []
  };

  componentDidMount() {
    this.getNew();
  }
  getNew = e => {
    fetch("https://api.icndb.com/jokes/random")
      .then(res => res.json())
      .then(json => this.setState({ value: [json] }));
  };
  render() {
    const { value } = this.state;
    const getJoke = value.map((value, index) => {
      return <p key={index}>{value.value.joke}</p>;
    });
    return (
      <div className="main">
        {getJoke}
        <button onClick={this.getNew}>New Joke</button>
      </div>
    );
  }
}

export default App;
