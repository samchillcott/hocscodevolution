import React from 'react';
import withCounter from './withCounter';

const InputCounter = ({name, incrementHandler, count}) => {
    return (
        <div>
            <input onKeyDown={incrementHandler}></input>
            <h2>{name} pressed input {count} times</h2>
        </div>
    )
}

export default withCounter(InputCounter)
