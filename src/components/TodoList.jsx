import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'

const TodoList = () => {
    // Create a state variable called todos, which will store my todo list
    const [todos, setTodos] = useState([])

    const addItem = (todo) => {
        // alert(`User entered ${todo}`)
        // Spread operator on Array
        // Add todo at the end of the todos array
        // update on the state
        setTodos([...todos,todo])

    }
  return (
    <div>
        <h2>To Do List</h2>
        <TodoInput handleAdd={addItem}/>
        {/* Later I will bring out the TodoItem */}
        {
            // For each todo item, we will create a TodoItem component
            todos.map((val,index)=> <TodoItem key={index} todo={val}/>)
        }
    </div>
  )
}

export default TodoList