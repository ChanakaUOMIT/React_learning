import React , { Component } from 'react';
import Greet from '../Greet/Greet';

class ClassComponent extends Component{
    constructor(props){
        super(props);

        this.state={
            text: "Text",
            isLoading: true,
            greetings:[]
        }

        setTimeout(()=>{
            this.setState({
                text:"Just Updated",
                // isLoading:false
            })
        }, 2000)

        setTimeout(()=>{
            this.setState({
                isLoading:false,
                greetings:[
                    {
                        id:1,
                        value:"Hello"
                    },
 
                    {
                        id:2,
                        value:"Ayubowan"
                    },

                    {
                        id:3,
                        value:"Benjur"
                    },
                    ,
                    
                ]
            })
        }, 1000)

    }
    render(){
        return(
            <div>
                {/* <p>I am a smart Components</p> */}
                {/* <p>{this.state.text}</p> */}
                {/* <Greet title="Welcome" /> */}

                {this.state.isLoading ?
                    <p>Is Loading...</p>
                    :
                    <Greet 
                        title={this.state.text} 
                        greetings={this.state.greetings}
                    />
                }

            </div>
        );
    }
}

export default ClassComponent;   