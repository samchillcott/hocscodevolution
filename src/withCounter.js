import React, {useState} from 'react'

const withCounter = (WrappedComponent) => {
    const WithCounter = () => {
        const [count, setCount] = useState(0);
        const incrementHandler = () => {
            setCount(count + 1)
        }
        return <WrappedComponent name="Sam" incrementHandler={incrementHandler} count={count}/>
    }
    return WithCounter
}

export default withCounter
