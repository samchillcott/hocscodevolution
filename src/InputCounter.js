import React, {useState} from 'react'

const InputCounter = () => {
    const [count, setCount] = useState(0);
    const inputHandler = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <input onKeyDown={inputHandler}></input>
            <h2>Input pressed {count} times</h2>
        </div>
    )
}

export default InputCounter
