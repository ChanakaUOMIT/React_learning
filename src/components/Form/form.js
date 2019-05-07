import React, { Component } from 'react';

class Form extends Component{
    render(){
        return(
            // <h1>Heloo</h1>
            <form>
                <input type="text" placeholder="Username" />
                <button type="submit">Submit</button>
            </form> 
        )
    }
}

export default Form;