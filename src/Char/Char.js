import React from 'react';

const Char = (props) => {
    const myStyle = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'center'
    };
    return(
        <div style = {myStyle} onClick = {props.clicked} >
         {props.character}
        </div>
    )
}

export default Char