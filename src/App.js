import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet/Greet';
import Header from './components/Header/Header';
import HasChildren from './components/HasChildren/hasChildern';
import ClassComponent from './components/HasChildren/classComponent';
import Search from './components/Search/search';
import Button from './components/Button/button';
import ComplexComponent from './components/ComplexComponent/complexComponent.';

const A =(props)=>{
  return(
    <p>I'm component A</p>
  )
}
const B =(props)=>{
  return(
    <p>I'm component B</p>
  )
}
class App extends Component {
  render() {
    let components={
      "A":A,
      "B":B
    }
    // let componentToRender=components[this.props.type]
    return (
      // <componentToRender />

      <div className="App"> 
        {/* <Header/>
        <ClassComponent /> */}
        {/* <HasChildren>
          <Greet/>
        </HasChildren> */}
        {/* <h1>Hello World</h1> */}

        {/* <Greet/> */}

        

        <Search />
        {/* <Button type="success" />
        <Button type="info" />
        <Button type="danger" />

        <ComplexComponent.Paragraph></ComplexComponent.Paragraph>
        <ComplexComponent.Heading /> */}

      </div>
    );
  }
}

export default App;
  