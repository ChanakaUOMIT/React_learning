import React from 'react';
import Logo from './Logo';
import Nav from './Navigation';

const Header = () =>{
    return(
        <header id="header">
            <div className="container"> 
            <Logo title="React App"/> 
            <Nav />
                
            </div>
        </header>
    )
}

export default Header;