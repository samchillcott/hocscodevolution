import React, {useState} from 'react'

const UpdatedComponent = (OriginalComponent) => {
    const NewComponent = () => {
        const [count, setCount] = useState(0);
        const incrementHandler = () => {
            setCount(count + 1)
        }
        return <OriginalComponent name="Sam" incrementHandler={incrementHandler} count={count}/>
    }
    return NewComponent
}

export default UpdatedComponent
