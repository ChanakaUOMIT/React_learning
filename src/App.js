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

  constructor(props){ 
    super(props);
    this.state={
      counter:0,
    }

    this.handleButtonClick=this.handleButtonClick.bind(this);
  }

  handleButtonClick(e, extra){
  //   let count=this.state.counter;
  //   count++;
  //   console.log("from the app component");
  //   this.setState({
  //     counter:count,
  //   })

  console.log(extra);
  this.setState((previousState)=>{
    console.log(previousState)
    return{
      counter:previousState.counter+1,
    }
  })
  }

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

        <p>Button Clicks: {this.state.counter}</p>

        

        <Search handleButtonClick={this.handleButtonClick}/>
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
  