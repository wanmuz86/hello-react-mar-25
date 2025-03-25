import React,{useState} from 'react'
import Counter from './Counter'
// Shortcut for the extension:
//rafce - > react arrow function component with export
// rfce -> react function component with export
// rcc -> React class component with export
const Hello = () => {

  const [age, setAge] = useState(16); // State, have a setter and getter
  const scores = [70,100,80,90,60,40,60]; // Array of scores / Constant - just to retrieve it withoud updating
  
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
      <hr />
      <h2>Example of List Rendering</h2>
      <ul>
        {
          // Use of map to bring out the list of scores
          // Each of the component, we need to associate a key
          // A key needs to be unique within the component
          //scores.map(val=> <li key={val}>{val}</li>) // If we have a unique key

          scores.map((val,index)=> <li key={index}>{val}</li>) // If we don't have a unique key, use index as the key
        }
      </ul>
    </div>
  )
}

export default Hello