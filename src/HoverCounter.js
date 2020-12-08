import React, {useState} from 'react';
import UpdatedComponent from './withCounter'

const HoverCounter = () => {
    const [count, setCount] = useState(0);
    const hoverHandler = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <h2 onMouseOver={hoverHandler}>Hovered {count} Times</h2>
        </div>
    )
}

export default UpdatedComponent(HoverCounter)
