import React from 'react';
import UpdatedComponent from './withCounter';

const ClickCounter = ({incrementHandler, name, count}) => {
    return (
        <div>
            <button onClick={incrementHandler}>{name} Clicked {count} Times</button>
        </div>
    )
}

export default UpdatedComponent(ClickCounter)

