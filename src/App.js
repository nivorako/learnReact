import React, { Component } from 'react';
import './App.css';


class List extends Component {
  render(){
    return (
      <div className="List">Ici ma liste</div>
    );
  }
}

class App extends Component {
  render(){
    return (
      <div className="App">
        <div className="App-header">
          <h2>Notre cours commence</h2>
        </div>
        <div className="App-intro">
          <List />
        </div>
      </div>
    );
  }
}

export default App;