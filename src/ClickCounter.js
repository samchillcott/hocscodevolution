import React, {useState} from 'react'

const ClickCounter = () => {
        const [count, setCount] = useState(0);

     const incrementHandler = () => {
            setCount(count + 1)
        }
    return (
        <div>
            <button onClick={incrementHandler}>Clicked {count} Times</button>
        </div>
    )
}

export default ClickCounter

