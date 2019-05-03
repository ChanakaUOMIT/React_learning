import React from 'react';
import PropTypes from 'prop-types'

const Logo =(props) =>{
    console.log(props)
    return(
        <div className="logo">
            <a href="#">{props.title}</a>
        </div>
    )
}

Logo.defaultProps={
    title:'My APP'
}

Logo.propTypes={
    title:PropTypes.string
}

export default Logo;    