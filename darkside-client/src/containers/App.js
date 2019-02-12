import React, { Component } from 'react';

import Snowboards from './Snowboards';
import './App.css';


class App extends Component {

    componentDidMount() {
        this.props.getSnowboards()
    }

    render() {
      return (
        <div className="App">
          <Snowboards />
        </div>
      );
    }
  }
  
  export default App;