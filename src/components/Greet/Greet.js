import React from 'react';

const Greet = (props) =>{
    console.log(props)
    return (
        <div>
            <h2> Ayubowan...! </h2>
            <h3>{props.title}</h3>
            <ul>
                {props.greetings.map((e) =>{
                    return(<li key={e.key}>{e.value}</li>)
                })}
            </ul>
        </div>
    )
}

export default Greet; 