import React,{useState} from 'react'

const Counter = () => {

// Create a "state"/variable called it count (getter)
// and setCounter as setter
// The initial value is set to 0
const [count, setCount] = useState(20);

  return (
    <div>
        <button>Increment!</button>
        <button>Decrement!</button>
        <button>Reset</button>
        <h3>Current Count: {count}</h3>
    </div>
  )
}

export default Counter