import React from 'react';

const Button = (props) => {
    const displayClasses = (type)=>{
        switch(type){
            case "success":
                return "btn success";
            case "info":
                return "btn info";
            case "danger":
                return "btn danger";
        }
    }
    return(
        <button className={displayClasses(props.type)}>{props.title}</button>
    )
}

Button.defaultProps = {
    title:"Click me!"
}

export default Button; 