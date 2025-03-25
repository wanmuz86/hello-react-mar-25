import React,{useState} from 'react'
import Counter from './Counter'
// Shortcut for the extension:
//rafce - > react arrow function component with export
// rfce -> react function component with export
// rcc -> React class component with export
const Hello = () => {

  const [age, setAge] = useState(16);
  
  return (
    <div>
    <h1>Hello World</h1>
     <p>Welcome to my first React website</p>
     <hr />
     <h2>Counter</h2>
     {/* Creating a different variant of our counter with props */}
     <Counter min={0} initial={0} max={10}/>
     <hr />
     <Counter min={10} initial={20} max={100}/>
     <hr />
     <Counter min={-5} initial={0} max={5}/>
     <hr />
     <Counter min={-2} initial={3} max={10}/>
     <hr/>
     <h2>Example of Conditional Rendering</h2>
      <p>Here is an example of conditional rendering</p>
      <p>Age: {age}</p>
      {
        // Conditional Rendering  - A certain component will only render if a certain condition is met
        // Example Scenario  - API Call, retrieving data from a database, etc. we will show a loading spinner
        // We show data when retrieving the dta is done and spinner during loading
        // Some will call it ternary operator
        age >= 18 ? <p>You are an adult</p> : <p>You are not on a legal age</p> 
      }
      <button onClick={()=> setAge(Math.ceil(Math.random() * 40))}>Generate random age</button>
    </div>
  )
}

export default Hello