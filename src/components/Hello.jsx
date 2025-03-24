import React from 'react'
import Counter from './Counter'
// Shortcut for the extension:
//rafce - > react arrow function component with export
// rfce -> react function component with export
// rcc -> React class component with export
const Hello = () => {
  return (
    <div>
    <h1>Hello World</h1>
     <p>Welcome to my first React website</p>
     <hr />
     <h2>Counter</h2>
     {/* Creating a different variant of our counter with props */}
     <Counter min={0} initial={0}/>
     <hr />
     <Counter min={10} initial={20}/>
     <hr />
     <Counter min={-5} initial={0}/>
     <hr />
     <Counter min={-2} initial={3}/>
    </div>
  )
}

export default Hello