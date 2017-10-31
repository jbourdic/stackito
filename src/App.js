import React, { Component } from 'react';
import './App.css';
import Layout from './Scenes/Layout/Layout';
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Layout />
      </div>
    );
  }
}

export default App;
