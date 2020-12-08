import React, {useState} from 'react'

const InputCounter = () => {
    const [count, setCount] = useState(0);
    const inputHandler = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <input onKeyDown={inputHandler}>Clicked {count} Times</input>
        </div>
    )
}

export default InputCounter
