import React, { Component } from 'react';
import Router from "components/Router";
import Hearder from "components/Header"

class App extends Component {
  render() {
    return (
      <>
        <Hearder />
        <Router />
      </>
    );
  }
}

export default App;
