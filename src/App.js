import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet/Greet';
import Header from './components/Header/Header';
import HasChildren from './components/HasChildren/hasChildern';
import ClassComponent from './components/HasChildren/classComponent';
import Search from './components/Search/search';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header/>
        <ClassComponent /> */}
        {/* <HasChildren>
          <Greet/>
        </HasChildren> */}
        {/* <h1>Hello World</h1> */}

        {/* <Greet/> */}

        <Search />
      </div>
    );
  }
}

export default App;
  