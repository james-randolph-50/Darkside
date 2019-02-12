import React, { Component } from 'react';

import Snowboards from './Snowboards';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            snowboards: []
        }
    }

    componentDidMount() {
        fetch(`${API_URL}/snowboards`)
          .then(response => response.json())
          .then(snowboards => this.setState({ snowboards }))
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