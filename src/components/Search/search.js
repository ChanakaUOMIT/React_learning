import React , { Component } from 'react';

class Search extends Component{
    //Click Event
    handleClick(e){
        console.log(e);
        alert("Clicked...")
    }
    render(){
        return(
            <div className="container">
                <form>
                    <input type="text"></input>
                    <button type="submit">Submit</button>
                </form>

                <button 
                // onClick={()=>{
                //     alert("Clicked")
                // }}

                onClick={this.handleClick}
                > 
                Click me</button>
            </div>
        )
    }
}

export default Search;