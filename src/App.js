import React, { Component } from 'react';

import './App.css';

import FormContainer from './Form/Form-Container';
import Navigation from './Navigation/Navigation';
import GridBar from './GridBar/GridBar';
//import NavigationReactBootstrap from './NavigationReactBootstrap';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navigation />
        <GridBar />
        <FormContainer />
      </div>
    );
  }
}

export default App;
