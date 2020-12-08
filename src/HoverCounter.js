import React from 'react';
import UpdatedComponent from './withCounter'

const HoverCounter = ({name, incrementHandler, count}) => {
    return (
        <div>
            <h2 onMouseOver={incrementHandler}>Hovered {count} Times</h2>
        </div>
    )
}

export default UpdatedComponent(HoverCounter)
