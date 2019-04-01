import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentDidMount() {
    window.fetch('/api/drinks')
    .then(res => res.json())
    .then(data => console.log(data))
    .then(e => console.log(e));
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
