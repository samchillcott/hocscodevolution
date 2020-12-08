import React from 'react';
import UpdatedComponent from './withCounter'

const InputCounter = ({name, incrementHandler, count}) => {
    return (
        <div>
            <input onKeyDown={incrementHandler}></input>
            <h2>{name} pressed input {count} times</h2>
        </div>
    )
}

export default UpdatedComponent(InputCounter)
