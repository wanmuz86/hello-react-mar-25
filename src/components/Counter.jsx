import React,{useState} from 'react'


// Object destructuring on the props to retreieve the min, initial and max values
const Counter = ({min, initial, max}) => {

    // const {min, initial} = props;

// Create a "state"/variable called it count (getter)
// and setCounter as setter
// The initial value is set to 0
const [count, setCount] = useState(initial);
const [message, setMessage] = useState('');

// Increment function that will increment the value of count by 1
const increment = () => {
    if (count === max){
        setMessage(`Number cannot be greater than ${max}`)
    }
    else {
        setCount(count + 1);
        setMessage('');
    }
}

const decrement = () => {
    if (count === min) {
        setMessage(`Number cannot be less than ${min}`)
    }
    else {
        setCount(count-1)
        setMessage('');
    }
}

const reset = () => {
    setCount(0)
    setMessage('');
}
  return (
    <div>
        {/* onClick for React needs to be camelCase onClick */}
        <button onClick={increment} className='bg-red'>Increment!</button>
        <button onClick={decrement}>Decrement!</button>
        <button onClick={reset}>Reset</button>
        <h3>Current Count: {count}</h3>
        <p>{message}</p>
    </div>
  )
}

export default Counter