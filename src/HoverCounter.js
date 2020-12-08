import React from 'react';
import withCounter from './withCounter';

const HoverCounter = ({name, incrementHandler, count}) => {
    return (
        <div>
            <h2 onMouseOver={incrementHandler}>{name} Hovered {count} Times</h2>
        </div>
    )
}

export default withCounter(HoverCounter)
