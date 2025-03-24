import React,{useState} from 'react'


const Counter = ({min, initial}) => {

    // const {min, initial} = props;

// Create a "state"/variable called it count (getter)
// and setCounter as setter
// The initial value is set to 0
const [count, setCount] = useState(initial);
const [message, setMessage] = useState('');

// Increment function that will increment the value of count by 1
const increment = () => {
    setCount(count + 1);
    setMessage('');
}
const decrement = () => {
    if (count === min) {
        setMessage(`Number cannot be less than ${min}`)
    }
    else {
    setCount(count-1)
    }
}

const reset = () => {
    setCount(0)
    setMessage('');
}
  return (
    <div>
        {/* onClick for React needs to be camelCase onClick */}
        <button onClick={increment}>Increment!</button>
        <button onClick={decrement}>Decrement!</button>
        <button onClick={reset}>Reset</button>
        <h3>Current Count: {count}</h3>
        <p>{message}</p>
    </div>
  )
}

export default Counter