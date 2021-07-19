import React from 'react';
const Square = (props) => {
    return (
        <button className={`square ${props.winner ? 'changeCursor' : ''}`} onClick={props.click}>
            {props.value}
        </button>
    );
};

export default Square;